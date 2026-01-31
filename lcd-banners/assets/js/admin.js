// ===================================
// LCD BANNER ADMIN PANEL
// ===================================

const { createApp } = Vue;

createApp({
    data() {
        return {
            settings: {
                shopName: 'Spool',
                shopNameAr: 'سبول',
                tagline: 'For all that the fields produce',
                taglineAr: 'لكل ما تنتجه الحقول',
                language: 'ar',
                primaryColor: '#2d5016',
                accentColor: '#d4af37',
                slideInterval: 8000,
                transitionDuration: 1000,
                autoRefreshInterval: 60000,
                currency: 'SAR'
            },
            products: [],
            editingProduct: null,
            filterType: 'all',
            showPreview: false,
            toast: {
                show: false,
                message: '',
                type: 'success'
            }
        };
    },

    computed: {
        filteredProducts() {
            if (this.filterType === 'all') {
                return this.products;
            }
            return this.products.filter(p => p.type === this.filterType);
        },

        activeProductsCount() {
            return this.products.filter(p => p.active).length;
        }
    },

    mounted() {
        console.log('🎛️ Admin Panel Starting...');
        this.loadData();
        this.loadFromLocalStorage();
    },

    methods: {
        // ===================================
        // DATA LOADING
        // ===================================

        async loadData() {
            try {
                const response = await fetch('data/products.json');
                const data = await response.json();
                
                this.settings = { ...this.settings, ...data.settings };
                this.products = data.products || [];
                
                console.log(`✅ Loaded ${this.products.length} products`);
                
            } catch (error) {
                console.error('❌ Error loading data:', error);
                this.showToast('Error loading data. Starting with empty products.', 'error');
            }
        },

        // ===================================
        // LANGUAGE TOGGLE
        // ===================================

        toggleLanguage() {
            this.settings.language = this.settings.language === 'en' ? 'ar' : 'en';
            this.showToast(`Language changed to ${this.settings.language.toUpperCase()}`, 'success');
        },

        setLanguage(lang) {
            this.settings.language = lang;
            this.showToast(`Language changed to ${lang.toUpperCase()}`, 'success');
        },

        // ===================================
        // PRODUCT FILTERING
        // ===================================

        productsByType(type) {
            return this.products.filter(p => p.type === type);
        },

        // ===================================
        // CRUD OPERATIONS
        // ===================================

        addNewProduct() {
            this.editingProduct = {
                id: `prod-${Date.now()}`,
                type: 'product',
                name: '',
                nameAr: '',
                price: 0,
                description: '',
                descriptionAr: '',
                imageUrl: '',
                accentColor: this.settings.accentColor,
                featured: false,
                active: true,
                displayOrder: this.products.length
            };
        },

        editProduct(product) {
            // Deep clone to avoid direct mutation
            this.editingProduct = JSON.parse(JSON.stringify(product));
        },

        duplicateProduct(product) {
            const duplicate = JSON.parse(JSON.stringify(product));
            duplicate.id = `prod-${Date.now()}`;
            duplicate.name = `${duplicate.name} (Copy)`;
            duplicate.nameAr = `${duplicate.nameAr} (نسخة)`;
            duplicate.displayOrder = this.products.length;
            
            this.products.push(duplicate);
            this.showToast('Product duplicated successfully!', 'success');
        },

        saveProduct() {
            if (!this.editingProduct.name) {
                this.showToast('Product name is required!', 'error');
                return;
            }

            const index = this.products.findIndex(p => p.id === this.editingProduct.id);
            
            if (index !== -1) {
                // Update existing
                this.products[index] = { ...this.editingProduct };
                this.showToast('Product updated successfully!', 'success');
            } else {
                // Add new
                this.products.push({ ...this.editingProduct });
                this.showToast('Product added successfully!', 'success');
            }

            this.closeModal();
        },

        deleteProduct(index) {
            if (confirm('Are you sure you want to delete this product?')) {
                const product = this.products[index];
                this.products.splice(index, 1);
                this.showToast(`"${product.name}" deleted successfully!`, 'success');
            }
        },

        toggleActive(product) {
            product.active = !product.active;
            this.showToast(
                product.active ? 'Product enabled' : 'Product disabled',
                'success'
            );
        },

        closeModal() {
            this.editingProduct = null;
        },

        // ===================================
        // EXPORT DATA
        // ===================================

        exportData() {
            const data = {
                settings: this.settings,
                products: this.products
            };

            const json = JSON.stringify(data, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'products.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.showToast('JSON exported successfully! Replace data/products.json with this file.', 'success');
        },

        // ===================================
        // IMPORT DATA
        // ===================================

        importData() {
            this.$refs.fileInput.click();
        },

        handleFileImport(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    if (data.settings) {
                        this.settings = { ...this.settings, ...data.settings };
                    }
                    
                    if (data.products) {
                        this.products = data.products;
                    }

                    this.showToast('Data imported successfully!', 'success');
                } catch (error) {
                    console.error('Import error:', error);
                    this.showToast('Error importing JSON file!', 'error');
                }
            };

            reader.readAsText(file);
            event.target.value = ''; // Reset input
        },

        // ===================================
        // LOCAL STORAGE (DRAFT SAVING)
        // ===================================

        saveToLocalStorage() {
            const data = {
                settings: this.settings,
                products: this.products
            };

            localStorage.setItem('lcd-banners-draft', JSON.stringify(data));
            this.showToast('Draft saved to browser storage!', 'success');
        },

        loadFromLocalStorage() {
            const draft = localStorage.getItem('lcd-banners-draft');
            if (draft) {
                try {
                    const data = JSON.parse(draft);
                    
                    // Only load if we have empty products (don't overwrite loaded data)
                    if (this.products.length === 0 && data.products) {
                        this.settings = { ...this.settings, ...data.settings };
                        this.products = data.products;
                        console.log('📂 Loaded draft from localStorage');
                    }
                } catch (error) {
                    console.error('Error loading draft:', error);
                }
            }
        },

        // ===================================
        // TOAST NOTIFICATIONS
        // ===================================

        showToast(message, type = 'success') {
            this.toast.message = message;
            this.toast.type = type;
            this.toast.show = true;

            setTimeout(() => {
                this.toast.show = false;
            }, 3000);
        }
    },

    watch: {
        // Auto-save draft when products or settings change
        products: {
            handler() {
                // Debounced auto-save
                clearTimeout(this.autoSaveTimeout);
                this.autoSaveTimeout = setTimeout(() => {
                    this.saveToLocalStorage();
                }, 2000);
            },
            deep: true
        },

        settings: {
            handler() {
                clearTimeout(this.autoSaveTimeout);
                this.autoSaveTimeout = setTimeout(() => {
                    this.saveToLocalStorage();
                }, 2000);
            },
            deep: true
        }
    }
}).mount('#app');

console.log('✅ Admin panel initialized');
console.log('💡 Edit products and click "Export JSON" to save changes');
console.log('💡 Replace data/products.json with the exported file');
