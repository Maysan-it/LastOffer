import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API requests
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main proposal page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Derma Art Clinic - Digital Transformation Proposal | Maysan IT Solutions</title>
        <meta name="description" content="Comprehensive clinic management system proposal for Derma Art - Website, CRM, Inventory Management by Maysan IT Solutions">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        
        <!-- Custom Styles -->
        <link href="/static/styles.css" rel="stylesheet">
        
        <!-- Tailwind Config -->
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            'inter': ['Inter', 'sans-serif'],
                        },
                        colors: {
                            'maysan': {
                                'blue': '#1e40af',
                                'light-blue': '#3b82f6',
                                'dark': '#1e293b',
                                'gray': '#64748b'
                            }
                        },
                        animation: {
                            'fade-in': 'fadeIn 0.5s ease-in',
                            'slide-up': 'slideUp 0.6s ease-out',
                            'pulse-slow': 'pulse 3s infinite'
                        }
                    }
                }
            }
        </script>
    </head>
    <body class="font-inter bg-gray-50 text-gray-900" dir="ltr">
        <!-- Loading Screen -->
        <div id="loading-screen" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div class="text-center">
                <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-maysan-blue mx-auto mb-4"></div>
                <p class="text-maysan-gray">Loading Proposal...</p>
            </div>
        </div>
        
        <!-- Header -->
        <header class="bg-white shadow-lg sticky top-0 z-40">
            <div class="container mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <div class="bg-maysan-blue text-white p-3 rounded-lg">
                            <i class="fas fa-hospital text-xl"></i>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-maysan-dark">Derma Art Clinic</h1>
                            <p class="text-sm text-maysan-gray">Digital Transformation Proposal</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button id="lang-toggle" class="bg-maysan-light-blue text-white px-4 py-2 rounded-lg hover:bg-maysan-blue transition-colors">
                            <i class="fas fa-globe mr-2"></i>
                            <span id="lang-text">العربية</span>
                        </button>
                        <div class="text-right">
                            <p class="font-semibold text-maysan-dark">Maysan IT Solutions</p>
                            <p class="text-sm text-maysan-gray">Eng. Ahmed Abu Hashem</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="bg-maysan-dark text-white py-3 sticky top-20 z-30">
            <div class="container mx-auto px-4">
                <ul class="flex space-x-8 overflow-x-auto">
                    <li><a href="#overview" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-eye mr-2"></i>Overview</a></li>
                    <li><a href="#modules" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-cubes mr-2"></i>Modules</a></li>
                    <li><a href="#pricing" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-tag mr-2"></i>Pricing</a></li>
                    <li><a href="#timeline" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-calendar-alt mr-2"></i>Timeline</a></li>
                    <li><a href="#team" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-users mr-2"></i>Our Team</a></li>
                    <li><a href="#contact" class="nav-link block py-2 px-4 rounded hover:bg-maysan-blue transition-colors">
                        <i class="fas fa-envelope mr-2"></i>Contact</a></li>
                </ul>
            </div>
        </nav>

        <!-- Main Content -->
        <main id="main-content" class="opacity-0">
            <!-- Hero Section -->
            <section id="overview" class="bg-gradient-to-br from-maysan-blue to-maysan-light-blue text-white py-16">
                <div class="container mx-auto px-4 text-center">
                    <div class="animate-fade-in">
                        <h2 class="text-4xl md:text-6xl font-bold mb-6">
                            Transform Your Clinic
                            <span class="block text-yellow-300">Into Digital Excellence</span>
                        </h2>
                        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Complete digital ecosystem for Derma Art Clinic - From patient booking to inventory management, 
                            all integrated seamlessly for maximum efficiency.
                        </p>
                        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <div class="text-3xl font-bold">SAR 30-35K</div>
                                <div class="text-sm opacity-80">Website + CRM System</div>
                            </div>
                            <div class="text-2xl">+</div>
                            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <div class="text-3xl font-bold">SAR 15-20K</div>
                                <div class="text-sm opacity-80">Inventory Management</div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <p class="text-lg opacity-90">* All prices exclude VAT</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Modules Section -->
            <section id="modules" class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h3 class="text-4xl font-bold text-maysan-dark mb-4">Complete Solution Modules</h3>
                        <p class="text-xl text-maysan-gray max-w-2xl mx-auto">
                            Four integrated systems working together to revolutionize your clinic operations
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Module 1: Website -->
                        <div class="module-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center mb-6">
                                <div class="bg-blue-500 text-white p-4 rounded-xl mr-4">
                                    <i class="fas fa-globe text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-maysan-dark">Professional Website</h4>
                                    <p class="text-maysan-gray">Multi-language clinic website with online booking</p>
                                </div>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Service showcase and clinic information</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Online appointment booking system</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Responsive design (Mobile, Tablet, Desktop)</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Bilingual support (Arabic/English)</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Admin dashboard for booking management</span></li>
                            </ul>
                        </div>

                        <!-- Module 2: CRM -->
                        <div class="module-card bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center mb-6">
                                <div class="bg-purple-500 text-white p-4 rounded-xl mr-4">
                                    <i class="fas fa-users text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-maysan-dark">CRM System</h4>
                                    <p class="text-maysan-gray">Customer relationship & campaign management</p>
                                </div>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Complete customer data management</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Medical history tracking</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Marketing campaign management</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Social media integration</span></li>

                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Detailed performance reports</span></li>
                            </ul>
                        </div>

                        <!-- Module 3: Clinic Management -->
                        <div class="module-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center mb-6">
                                <div class="bg-green-500 text-white p-4 rounded-xl mr-4">
                                    <i class="fas fa-hospital-user text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-maysan-dark">Clinic Management</h4>
                                    <p class="text-maysan-gray">Complete clinic operations system</p>
                                </div>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Reception screen management</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Doctor and medical staff management</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Billing and payments system</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>SMS/WhatsApp appointment reminders</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Comprehensive financial reports</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Seamless integration with website booking</span></li>
                            </ul>
                        </div>

                        <!-- Module 4: Inventory -->
                        <div class="module-card bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center mb-6">
                                <div class="bg-orange-500 text-white p-4 rounded-xl mr-4">
                                    <i class="fas fa-boxes text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-maysan-dark">Inventory Management</h4>
                                    <p class="text-maysan-gray">Smart inventory with billing integration</p>
                                </div>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Complete inventory management (Equipment, Tools, Supplies, Cosmetics)</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Direct integration with sales invoices</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Low stock alerts and notifications</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Consumption tracking and cost monitoring</span></li>
                                <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Automated waste reduction reports</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->
            <section id="pricing" class="py-16 bg-gray-100">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h3 class="text-4xl font-bold text-maysan-dark mb-4">Investment Options</h3>
                        <p class="text-xl text-maysan-gray max-w-2xl mx-auto">
                            Flexible pricing structure designed for your clinic's growth
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <!-- Package 1 -->
                        <div class="pricing-card bg-white p-8 rounded-2xl shadow-xl border-4 border-maysan-blue relative">
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-maysan-blue text-white px-4 py-2 rounded-full text-sm font-semibold">RECOMMENDED</span>
                            </div>
                            <div class="text-center mb-8">
                                <h4 class="text-2xl font-bold text-maysan-dark mb-2">Core Digital Package</h4>
                                <div class="text-5xl font-bold text-maysan-blue mb-2">30-35K</div>
                                <div class="text-gray-600">SAR (Excl. VAT)</div>
                                <p class="text-maysan-gray mt-4">Website + CRM + Clinic Management</p>
                            </div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Professional bilingual website with online booking</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Complete CRM system with social media integration</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Clinic management with billing & notifications</span>
                                </li>

                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Full system integration & training</span>
                                </li>
                            </ul>
                            <div class="text-center">
                                <button class="bg-maysan-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-maysan-dark transition-colors">
                                    Choose This Package
                                </button>
                            </div>
                        </div>

                        <!-- Package 2 -->
                        <div class="pricing-card bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                            <div class="text-center mb-8">
                                <h4 class="text-2xl font-bold text-maysan-dark mb-2">Inventory Add-on</h4>
                                <div class="text-5xl font-bold text-orange-500 mb-2">15-20K</div>
                                <div class="text-gray-600">SAR (Excl. VAT)</div>
                                <p class="text-maysan-gray mt-4">Advanced Inventory Management</p>
                            </div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Complete inventory tracking system</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Automated billing integration</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Smart alerts & notifications</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Cost monitoring & waste reduction</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                    <span>Advanced consumption reports</span>
                                </li>
                            </ul>
                            <div class="text-center">
                                <button class="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                    Add to Package
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-12 p-8 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto">
                        <h4 class="text-2xl font-bold text-maysan-dark mb-4">Complete Solution</h4>
                        <div class="flex items-center justify-center space-x-4 mb-6">
                            <div class="text-3xl font-bold text-maysan-blue">SAR 30-35K</div>
                            <div class="text-2xl">+</div>
                            <div class="text-3xl font-bold text-orange-500">SAR 15-20K</div>
                            <div class="text-2xl">=</div>
                            <div class="text-4xl font-bold text-green-600">SAR 45-55K</div>
                        </div>
                        <div class="text-center mb-4">
                            <p class="text-lg text-maysan-gray">* All prices exclude VAT</p>
                        </div>
                        <p class="text-xl text-maysan-gray mb-6">
                            Complete digital transformation for your clinic with all four integrated modules
                        </p>
                        <button class="bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
                            <i class="fas fa-rocket mr-2"></i>
                            Start Complete Transformation
                        </button>
                    </div>
                </div>
            </section>

            <!-- Timeline Section -->
            <section id="timeline" class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h3 class="text-4xl font-bold text-maysan-dark mb-4">Project Timeline</h3>
                        <p class="text-xl text-maysan-gray max-w-2xl mx-auto">
                            Step-by-step implementation plan with clear milestones
                        </p>
                    </div>

                    <div class="max-w-4xl mx-auto">
                        <div class="relative">
                            <!-- Timeline Line -->
                            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-maysan-blue"></div>

                            <!-- Phase 1 -->
                            <div class="relative flex items-start mb-12">
                                <div class="flex-shrink-0 w-16 h-16 bg-maysan-blue text-white rounded-full flex items-center justify-center text-xl font-bold z-10">1</div>
                                <div class="ml-8">
                                    <h4 class="text-2xl font-bold text-maysan-dark mb-2">Planning & Design Phase</h4>
                                    <div class="text-maysan-gray mb-2">Duration: 1-2 weeks</div>
                                    <ul class="space-y-2 text-maysan-gray">
                                        <li>• Requirements gathering and analysis</li>
                                        <li>• System architecture design</li>
                                        <li>• UI/UX mockups and wireframes</li>
                                        <li>• Client approval and sign-off</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Phase 2 -->
                            <div class="relative flex items-start mb-12">
                                <div class="flex-shrink-0 w-16 h-16 bg-maysan-blue text-white rounded-full flex items-center justify-center text-xl font-bold z-10">2</div>
                                <div class="ml-8">
                                    <h4 class="text-2xl font-bold text-maysan-dark mb-2">Core Development</h4>
                                    <div class="text-maysan-gray mb-2">Duration: 4-6 weeks</div>
                                    <ul class="space-y-2 text-maysan-gray">
                                        <li>• Website development (frontend & backend)</li>
                                        <li>• Online booking system integration</li>
                                        <li>• CRM system development</li>
                                        <li>• Clinic management module</li>
                                        <li>• Database setup and configuration</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Phase 3 -->
                            <div class="relative flex items-start mb-12">
                                <div class="flex-shrink-0 w-16 h-16 bg-maysan-blue text-white rounded-full flex items-center justify-center text-xl font-bold z-10">3</div>
                                <div class="ml-8">
                                    <h4 class="text-2xl font-bold text-maysan-dark mb-2">Integration & Testing</h4>
                                    <div class="text-maysan-gray mb-2">Duration: 2-3 weeks</div>
                                    <ul class="space-y-2 text-maysan-gray">
                                        <li>• System integration testing</li>
                                        <li>• SMS/WhatsApp notification setup</li>
                                        <li>• Payment gateway integration</li>
                                        <li>• Multi-language implementation</li>
                                        <li>• Security testing and optimization</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Phase 4 -->
                            <div class="relative flex items-start mb-12">
                                <div class="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">4</div>
                                <div class="ml-8">
                                    <h4 class="text-2xl font-bold text-maysan-dark mb-2">Inventory Module (Optional)</h4>
                                    <div class="text-maysan-gray mb-2">Duration: 3-4 weeks</div>
                                    <ul class="space-y-2 text-maysan-gray">
                                        <li>• Inventory management system development</li>
                                        <li>• Billing system integration</li>
                                        <li>• Stock tracking and alerts</li>
                                        <li>• Reporting and analytics</li>
                                        <li>• Performance optimization</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Phase 5 -->
                            <div class="relative flex items-start mb-12">
                                <div class="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">5</div>
                                <div class="ml-8">
                                    <h4 class="text-2xl font-bold text-maysan-dark mb-2">Training & Launch</h4>
                                    <div class="text-maysan-gray mb-2">Duration: 1 week</div>
                                    <ul class="space-y-2 text-maysan-gray">
                                        <li>• Staff training sessions</li>
                                        <li>• System deployment to production</li>
                                        <li>• Data migration and setup</li>
                                        <li>• Go-live support</li>
                                        <li>• Documentation delivery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-maysan-blue/10 p-8 rounded-2xl mt-12">
                            <h4 class="text-2xl font-bold text-maysan-dark mb-4">Total Timeline</h4>
                            <div class="grid md:grid-cols-1 gap-6 text-center">
                                <div>
                                    <div class="text-4xl font-bold text-maysan-blue mb-2">8 weeks</div>
                                    <div class="text-maysan-gray text-lg">Complete Solution (All Modules Included)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section id="team" class="py-16 bg-maysan-dark text-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h3 class="text-4xl font-bold mb-4">Meet Your Development Team</h3>
                        <p class="text-xl opacity-90 max-w-2xl mx-auto">
                            Experienced professionals from Maysan IT Solutions
                        </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Team Member 1 -->
                        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                            <div class="w-24 h-24 bg-maysan-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <h4 class="text-2xl font-bold mb-2">Eng. Ahmed Abu Hashem</h4>
                            <div class="text-yellow-300 mb-4">Project Director & Healthcare IT Specialist</div>
                            <p class="opacity-90 mb-4">
                                Gastroenterologist and entrepreneur with extensive experience in healthcare digitization 
                                and clinic management systems.
                            </p>
                            <div class="flex justify-center space-x-4">
                                <div class="bg-blue-600 p-2 rounded">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="bg-green-600 p-2 rounded">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Team Member 2 -->
                        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                            <div class="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                <i class="fas fa-code"></i>
                            </div>
                            <h4 class="text-2xl font-bold mb-2">Senior Full-Stack Developer</h4>
                            <div class="text-yellow-300 mb-4">Technical Lead</div>
                            <p class="opacity-90 mb-4">
                                Expert in React, Node.js, and healthcare system integration with 8+ years experience 
                                in medical software development.
                            </p>
                            <div class="flex justify-center space-x-2 text-sm">
                                <span class="bg-blue-500 px-2 py-1 rounded">React</span>
                                <span class="bg-green-500 px-2 py-1 rounded">Node.js</span>
                                <span class="bg-purple-500 px-2 py-1 rounded">PostgreSQL</span>
                            </div>
                        </div>

                        <!-- Team Member 3 -->
                        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                            <div class="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                <i class="fas fa-paint-brush"></i>
                            </div>
                            <h4 class="text-2xl font-bold mb-2">UI/UX Designer</h4>
                            <div class="text-yellow-300 mb-4">Design Specialist</div>
                            <p class="opacity-90 mb-4">
                                Creates intuitive and accessible interfaces for healthcare applications with focus on 
                                user experience and Arabic design patterns.
                            </p>
                            <div class="flex justify-center space-x-2 text-sm">
                                <span class="bg-pink-500 px-2 py-1 rounded">Figma</span>
                                <span class="bg-blue-500 px-2 py-1 rounded">Adobe XD</span>
                                <span class="bg-green-500 px-2 py-1 rounded">Sketch</span>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-12">
                        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
                            <h4 class="text-2xl font-bold mb-4">Why Choose Maysan IT Solutions?</h4>
                            <div class="grid md:grid-cols-2 gap-4 text-left">
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-check text-green-400 mt-1"></i>
                                    <span>Healthcare industry expertise</span>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-check text-green-400 mt-1"></i>
                                    <span>Local Saudi market knowledge</span>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-check text-green-400 mt-1"></i>
                                    <span>Arabic/English bilingual solutions</span>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-check text-green-400 mt-1"></i>
                                    <span>Ongoing support & maintenance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="py-16 bg-gradient-to-br from-maysan-blue to-maysan-light-blue text-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h3 class="text-4xl font-bold mb-4">Ready to Transform Your Clinic?</h3>
                        <p class="text-xl opacity-90 max-w-2xl mx-auto">
                            Let's discuss your project and create a customized solution for Derma Art Clinic
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <!-- Contact Info -->
                        <div>
                            <h4 class="text-2xl font-bold mb-6">Get In Touch</h4>
                            
                            <div class="space-y-6">
                                <div class="flex items-center space-x-4">
                                    <div class="bg-white/20 p-4 rounded-lg">
                                        <i class="fas fa-user text-2xl"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Eng. Ahmed Abu Hashem</div>
                                        <div class="opacity-90">Project Director</div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4">
                                    <div class="bg-white/20 p-4 rounded-lg">
                                        <i class="fab fa-whatsapp text-2xl"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold">WhatsApp</div>
                                        <div class="opacity-90">+966 54 080 7165</div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4">
                                    <div class="bg-white/20 p-4 rounded-lg">
                                        <i class="fas fa-envelope text-2xl"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibtml">Email</div>
                                        <div class="opacity-90">eng.ahmed@maysan-it.com</div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4">
                                    <div class="bg-white/20 p-4 rounded-lg">
                                        <i class="fas fa-building text-2xl"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Maysan IT Solutions</div>
                                        <div class="opacity-90">Saudi Arabia</div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                                <h5 class="text-xl font-bold mb-4">Next Steps:</h5>
                                <ol class="space-y-2 text-sm opacity-90">
                                    <li>1. Schedule a consultation call</li>
                                    <li>2. Discuss your specific requirements</li>
                                    <li>3. Customize the proposal to your needs</li>
                                    <li>4. Review timeline and pricing</li>
                                    <li>5. Sign agreement and start development</li>
                                </ol>
                            </div>
                        </div>

                        <!-- Quick Contact Form -->
                        <div>
                            <h4 class="text-2xl font-bold mb-6">Request Consultation</h4>
                            
                            <form id="contact-form" class="space-y-6">
                                <div>
                                    <label class="block text-sm font-semibold mb-2">Full Name *</label>
                                    <input type="text" required class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30" placeholder="Dr. Full Name">
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold mb-2">Phone Number *</label>
                                    <input type="tel" required class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30" placeholder="+966 XX XXX XXXX">
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold mb-2">Email Address</label>
                                    <input type="email" class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30" placeholder="doctor@clinic.com">
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold mb-2">Clinic Name</label>
                                    <input type="text" class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30" placeholder="Derma Art Clinic">
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold mb-2">Interested Package</label>
                                    <select class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30">
                                        <option>Core Digital Package (SAR 30-35K excl. VAT)</option>
                                        <option>Complete Solution (SAR 45-55K excl. VAT)</option>
                                        <option>Custom Package</option>
                                        <option>Need Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold mb-2">Additional Notes</label>
                                    <textarea rows="4" class="w-full p-4 rounded-lg text-gray-900 border-0 focus:ring-4 focus:ring-white/30" placeholder="Tell us about your specific needs..."></textarea>
                                </div>

                                <button type="submit" class="w-full bg-white text-maysan-blue py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                                    <i class="fas fa-paper-plane mr-2"></i>
                                    Request Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-maysan-dark text-white py-8">
            <div class="container mx-auto px-4 text-center">
                <div class="flex items-center justify-center space-x-4 mb-4">
                    <div class="bg-maysan-blue p-3 rounded-lg">
                        <i class="fas fa-code text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">Maysan IT Solutions</h3>
                        <p class="text-sm opacity-75">Transforming Healthcare Through Technology</p>
                    </div>
                </div>
                <p class="opacity-75">© 2024 Maysan IT Solutions. All rights reserved.</p>
                <p class="text-sm opacity-60 mt-2">This proposal is confidential and proprietary to Maysan IT Solutions</p>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// API endpoints for form submissions and interactions
app.post('/api/contact', async (c) => {
  const formData = await c.req.json()
  
  // In a real application, you'd save this to a database or send an email
  console.log('Contact form submission:', formData)
  
  return c.json({ 
    success: true, 
    message: 'Thank you for your interest! We will contact you within 24 hours.',
    data: formData
  })
})

app.get('/api/proposal-stats', (c) => {
  return c.json({
    totalViews: Math.floor(Math.random() * 1000) + 500,
    contactSubmissions: Math.floor(Math.random() * 50) + 25,
    lastUpdated: new Date().toISOString()
  })
})

export default app
