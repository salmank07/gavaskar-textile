import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edu-seedor',
  templateUrl: './edu-seedor.component.html',
  styleUrls: ['./edu-seedor.component.scss']
})
export class EduSeedorComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.loadData();
  }
  
  ngOnInit(): void {
  }
  mainData: any = [];
  data: any;

  loadData() {
    this.mainData = [
      {
        Id: 1, title: 'EDU Seedor', src: '../../assets/images/s1.jpg', des: 'Edu Seedor is dedicated for learning, Entity Management System (EMS), Learning Management System (LMS) & Learning Management Toolkit (LMT)- (E-Learning, E-library, E-lab) are the high-level segregation of this application bundle. Online courses, research forums, online evaluation along with both students and teachers’ applications via mobile & web delivery channels are the key offerings.',
        bundle: [
          { icon: 'fa-solid fa-city', bdes: 'EMS Backoffice Application' }, { icon: 'fa-solid fa-globe', bdes: 'LMS Web Application' }, { icon: 'fa-solid fa-laptop-file', bdes: 'LMT- Elearning Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'E-learning platform', fsrc: '../../assets/images/seedor/edu1.png', list: ['Online Learning management', 'Tool for interactive learning', 'Student & Parents portal'] },
          { ftitle: 'Entity Management System(EMS)', fsrc: '../../assets/images/seedor/edu2_my1.png', fdes: 'Simple and transparent registration process to make easy enrollment.', list: ['Online enrollment', 'Planned admissions', 'Seats management', 'Integrated communication', 'Document management'] },
          { ftitle: 'Learning Management System(LMS)', fsrc: '../../assets/images/seedor/crm4_edu3.png', fdes: 'Maximize your warehouse efficiency through modern online warehouse management software.', list: ['Purchased Product', 'Stoc', '2 to 3 warehouses (Raw materials/ Finished Products)', 'Internal transfers', 'Lot no/Batch no/Box by Box approach/FIFO', 'Bar Code'] },
          { ftitle: 'Learning Management Toolkit(LMT)', fsrc: '../../assets/images/seedor/edu4_fac5_crm6.png', fdes: 'Efficient and integrated financial management suite.', list: ['Online payment collections', '50+ payment gateways', 'Automated payment reconcilliation', 'Efficient fees collection', 'Faster invoice processing'] }
        ]
      },
      {
        Id: 2, title: 'CRM Seedor', src: '../../assets/images/s6.jpg', des: 'CRM Seedor bundle converts your customers into clients effortlessly, VOIP integration, bot enablement, mobility, Customer claims, affiliate program and market place support are the key highlights. Domain specific addons makes the crm very specific to the industry requirement, centralized data processing along with business intelligence makes the platform more efficient.',
        bundle: [
          { icon: 'fa-solid fa-briefcase', bdes: 'CRM Business Application' }, { icon: 'fa-solid fa-database', bdes: 'Database Backup Application' }, { icon: 'fa-solid fa-handshake-simple', bdes: 'Associate\Partner Web Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'Sales Pipeline Automation', fsrc: '../../assets/images/seedor/crm1.png', fdes: 'Guide the sales team from top of the funnel to order maturation', list: ['Configurable sales pipeline templates', 'Cross-functional collaboration, easier than ever', 'Lead each sales journey as unique', 'Collect structured data from leads to orders', 'Business intelligence support boost your sales'] },
          { ftitle: 'AI powered lead identification.', fsrc: '../../assets/images/seedor/crm2.png', fdes: 'Manage and analyze real time data to filter potential leads.', list: ['Website traffic to lead ratio', 'Track the quality of leads', 'Convertion Ratio'] },
          { ftitle: 'Lead Nurturing support.', fsrc: '../../assets/images/seedor/book1_crm3_crm7.png', fdes: 'Build affinity with prospects customers throughout sales cycle', list: ['Lead scraping or mining', 'Lead capturing & Scoring', 'Lead management', 'Sales Management'] },
          { ftitle: 'Priority calls management with ML.', fsrc: '../../assets/images/seedor/crm4_edu3.png', fdes: 'Turn cold calling into hot selling.', list: ['Calls management based on time preferrence', 'Auto scheduling', 'Call Proritization', 'Calls Follow up'] },
          { ftitle: 'Automated Social media marketing', fsrc: '../../assets/images/seedor/crm5.png', fdes: 'Improve your social media presence through content creation.', list: ['Personalized Marketing Campaigns', 'Automated Email Marketing', 'Social media publishing plan and automation', 'Targetted marketing campaing automation'] },
          { ftitle: 'Effective Service Delivery', fsrc: '../../assets/images/seedor/edu4_fac5_crm6.png', fdes: 'Define 100% success with high business requirement clarity.', list: ['Business requirement clasification', 'Gap analysis & predective corrective action', 'Provide clarity to translating business'] },
          { ftitle: 'Activity schedule monitoring', fsrc: '../../assets/images/seedor/book1_crm3_crm7.png', fdes: 'Centralization of all activities across the stockholders & processes', list: ['Manage activity-coordination problems', 'Improve sales team productivity'] },
          { ftitle: 'Start analyzing your CRM data', fsrc: '../../assets/images/seedor/build5_crm8_book2_fac4.png', fdes: 'Effectively mine your CRM for valuable insights and data.', list: ['User friendly BI tools & Interfaces', 'Business ready analytical reporting'] }

        ]
      },
      {
        Id: 3, title: 'Factory Seedor', src: '../../assets/images/s3.jpg', des: 'Factory Seedor bundle helps manufacturers, warehouses and freight forwarders to automate their work flows efficiently. The integrated IOT applications makes the process even simpler, smarter and reliable. Process driven manufacturing control, quality-controlled service delivery, optimized resource utilization such as material, machinery and tools are the key highlights.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Web Application' }, { icon: 'fa-solid fa-user-gear', bdes: 'My Business Application' }, { icon: 'fa-solid fa-handshake-simple', bdes: 'Associate\Partner Web Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'IOT powered inventory management', fsrc: '../../assets/images/seedor/fac1.png', fdes: 'Offer lifeline to business with Internet of Things (IoT)', list: ['IoT for increased inventory visibility', 'Increased warehouse efficiency.', 'Better demand prediction for greater profitability.', 'Reduce shrinkage and obsolete stock.', 'Ensure regulatory compliance.', 'Supply chain streamlining benefits.'] },
          { ftitle: 'Smart distribution management', fsrc: '../../assets/images/seedor/fac2.png', fdes: 'Benefit from near-perfect picking rates', list: ['Automation in stock picking', 'Accurate demand forecasting', 'Efficient labour allocation, reduced labour costs', 'Streamlined warehouse processes', 'Inventory accuracy & pick ratio', 'Inventory logging, cycle counting, and stock take'] },
          { ftitle: 'Smart Costing for Produce', fsrc: '../../assets/images/seedor/fac3_my6.png', fdes: 'Automate cost updates on BOM’s', list: ['Auto update cost price configuration on product', 'Impact direct materials cost, direct labour cost, overhead cost on bill of materials.', 'Process costing direct integration with accounting.', 'Analysis report for manufacturing process costing.'] },
          { ftitle: 'Automated Purchase Planning', fsrc: '../../assets/images/seedor/build5_crm8_book2_fac4.png', fdes: 'Analyzes demand forecasting , inventory status, product cost & lead time.', list: ['Predict the most efficient supply chain route.', 'Maximize profitability with data-driven Demand Forecasting.', 'Maximize profitability with data-driven Demand Forecasting.', 'Maximize profitability with data-driven Demand Forecasting.'] },
          { ftitle: 'Quality Control In All Stages', fsrc: '../../assets/images/seedor/edu4_fac5_crm6.png', fdes: 'Quality is pervasive through products, processes & procedures', list: ['Continuous improvement & quality output', 'Ensure lean production', 'International standards organization quality management standards', 'Quality check with pass-fail status', 'Quality check for warehouse operation', 'Quality analysis & alert reports'] },
          { ftitle: 'Effective Order Approval', fsrc: '../../assets/images/seedor/bill3_book3_fac6.png', fdes: 'Plan the material and its corresponding BoM', list: ['Material planning before production', 'Machine allocation planing', 'Gantt view for scheduling task', 'Effectively manage tasks with time and cost.', 'Keep track of dependent tasks.', 'Prioritize task over another based on the demand.', 'Critical path identification'] },
          { ftitle: 'Automate Inventory Work Flow', fsrc: '../../assets/images/seedor/fac7.png', fdes: 'Manage the work flow with limited resource', list: ['Optimize your picking routes', 'Multilocation support', 'Palettization, bulk storage', 'Stock location 3D view support'] },
          { ftitle: 'Logistics & Freight Support', fsrc: '../../assets/images/seedor/bill7_fac8.png', fdes: 'Support Air,Land and Sea transport methods', list: ['Cross docking , Drop shipping support', 'Freight capacity and cost calculation', 'Shipment tracking, log trace & Transit management', 'Precalculation of shipping HUs', 'Route planning, Yard & delivery management', 'Auto generate and email shipment document', 'Update files, notes & tasks to shipments', 'Electronic AWB stocks & air waybill to 100+ carriers', 'Booking requests & shipping (BL) to 50+ shipping lines', 'Pre & post cargo services.', 'Vehicle Chartering, BL , Manifest etc'] }
        ]
      },
      {
        Id: 4, title: 'My Seedor', src: '../../assets/images/s4.jpg', des: 'My Seedor bundle is a perfect offering for membership services, be it an organization or a public institution. My seedor is the ideal application bundle to manage your committees and membership needs. Efficient service, facility & membership management together with family tree support makes the platform vibrant. Enjoy smooth migration of the existing processes and workflows.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Web Application' }, { icon: 'fa-solid fa-user-gear', bdes: 'My Business Application' }, { icon: 'fa-solid fa-handshake-simple', bdes: 'Associate\Partner Web Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'Multiple Membership Types', fsrc: '../../assets/images/seedor/edu2_my1.png', fdes: 'Manage membership , make the entire experience enjoyable', list: ['Extented option to support different memberhsip types.', 'Automation on membership charges.', 'Alert the stake holders on membership suspension or cancelation.', 'Reminders, alerts for important days,events and triggers.'] },
          { ftitle: 'Family Tree with history tracking', fsrc: '../../assets/images/seedor/my2.png', fdes: 'Visualize your ancestor – family history in 3D view.', list: ['Track the family structure in tree view.', 'Identify the relationship type and status.', 'Register & renew membership.'] },
          { ftitle: 'Member Groups & Council support', fsrc: '../../assets/images/seedor/bill4_my3_book4.png', fdes: 'Create & manage groups or councils to act under your organization.', list: ['Track membership group or membership council asserts and accounting .', 'Track meetings and events including reminders and alert.', 'Audit the unit individualy including the financial tracking.', 'Maintain regular activity log, minutes of meeting and activity tracking.'] },
          { ftitle: 'Inventory & Facility Management', fsrc: '../../assets/images/seedor/my4.png', fdes: 'Renting facility made easy, online checkin,online payment and online checkout.', list: ['Let your facility earn for you with ease, by renting.', 'Record damages and charge the customer with pain.', 'Auto calculated cleaning-gap between two successive bookings.', 'Online portal for easy online checkin,payment and checkout.'] },
          { ftitle: 'Online Member Directory', fsrc: '../../assets/images/seedor/cafe1_my5.png', fdes: 'Allow your members to register and manage their memberhip with you at their comfort.', list: ['Enjoy services like renew, book or reserve online or mobile at your convinience.', 'Member Directory - Search the interested profiles with a click.', 'Single platform for service request,bookings and subscription management.'] },
          { ftitle: 'Contract & Subscription Management', fsrc: '../../assets/images/seedor/fac3_my6.png', fdes: 'Keep business moving with contract management software that works at your speed.', list: ['Customize, negotiate, and finalize contracts.', 'Tender estimation and computes top bidder from their rating.', 'Contract drafting, Contract renewals and Contract redlining.', 'Manage recurring documents, subscriptions and orders.'] }
        ]
      },
      {
        Id: 5, title: 'Cafe Seedor', src: '../../assets/images/s8.jpg', des: 'Café Seedor is tailored to support the hospitality industry, be it a simple or multi cuisine restaurant, or a multi star hotel the platform can make the entire work flow efficient, reliable and automated. Features like facility booking, folio management, fast billing, Online ordering, Offline support are the key offerings.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Website' }, { icon: 'fa-solid fa-receipt', bdes: 'Billing\POS Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-database', bdes: 'Database Backup Application' }, { icon: 'fa-solid fa-mobile-screen-button', bdes: 'Customer Mobile App' }, { icon: 'fa-solid fa-truck', bdes: 'Delivery Boy Mobile App' }],
        features: [
          { ftitle: 'Customer Loyalty programs.', fsrc: '../../assets/images/seedor/cafe1_my5.png', fdes: 'The structured use of  gamification, commercial incentives, marketing tactics makes your customer  happier', list: ['Increased Customer Retention', 'Fun way of saying thanks to the loyal customers.', 'improve business advocacy.'] },
          { ftitle: 'Remote monitoring with centralized dashboard', fsrc: '../../assets/images/seedor/cafe2.png', fdes: 'Simple, accurate time tracking and effective monitoring, ensure the expected productivity', list: ['Time and Attendance', 'Real-Time Monitoring', 'Productivity Tracking', 'Activities Tracking'] },
          { ftitle: 'Online booking with mobile app', fsrc: '../../assets/images/seedor/cafe3.png', fdes: 'E-commerce & mobile enablement are the key offerings of the platform.', list: ['Self-branded mobile apps on android & IOS stores', 'Customized e-commerce platform', 'Manage customer loyalty program', 'Real time order traceability in mobile app'] },
          { ftitle: 'BOM based inventory adjustment', fsrc: '../../assets/images/seedor/cafe4.png', fdes: 'Enjoy automated inventory management based on the predefined BOM', list: ['Automated Purchase execution', 'Prevent stock-outs and over stock', 'Product service levels agreement', 'Purchase Planning, Cost analysis, Vendor discounts', 'Vendor lead times, Budget constraints'] },
          { ftitle: 'AI powered SEO, SMM support', fsrc: '../../assets/images/seedor/cafe5.png', fdes: 'Improve social media presence through content curation and scheduling', list: ['Personalized Marketing Campaigns', 'Automated Email Marketing', 'Social media publishing plan and automation', 'Targetted marketing campaing automation'] },
          { ftitle: 'Priority based Que management', fsrc: '../../assets/images/seedor/build2_cafe6.png', fdes: 'Enjoy effective queuing strategy and improve customer satisfaction & retention', list: ['Pre-Order support', 'Policy based que management', 'Reduce customer waiting time'] }
        ]
      },
      {
        Id: 6, title: 'Build Seedor', src: '../../assets/images/s7.jpg', des: 'Build Seedor makes construction industry more productive, MEP business, facade industry are the other businesses that can be benefited from the rich feature set of this bundle. It offers total co-ordination of all the key processes presumed in Companies which are entailed themselves in Building & construction management with multi-site support.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Web Application' }, { icon: 'fa-solid fa-user-gear', bdes: 'My Business Application' }, { icon: 'fa-solid fa-handshake-simple', bdes: 'Associate\Partner Web Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'Job & Work Order Management', fsrc: '../../assets/images/seedor/build1.png', fdes: 'Easily manage and  track all project management activities', list: ['Allow manager or user to create Job, Work & Task', 'Plan material for specific Job or Work orders.', 'Track Material Requisition Details', 'Configure and manage project stages', 'Project analytic reports.'] },
          { ftitle: 'Project Planning and Controlling', fsrc: '../../assets/images/seedor/build2_cafe6.png', fdes: 'Create budget for projects based on analytical accounts.', list: ['WBS(Work Breakdown Structure) planning.', 'Easy & simple estimate & quotation management.', 'Analyse actual purchase, bills, timesheet on budget', 'Drawing for project and job contracting', 'Real time tracking contracts, payments, labours & materials', 'Root & scope cost impact analysis'] },
          { ftitle: 'Contract Management', fsrc: '../../assets/images/seedor/build3.png', fdes: 'Keep  moving with contract management at your speed', list: ['Customize, negotiate, and eSign complex contracts.', 'Allows your subcontractor(s) to view orders in portal.', 'Estimation & computes top bidder from their rating.', 'Redefine contract drafting & renewals'] },
          { ftitle: 'Enahanced Project Management', fsrc: '../../assets/images/seedor/build4_build6.png', fdes: 'Effectively manage project sites and operations', list: ['Construction daily logs', 'Transmittals & submittals for projects', 'Link job order with maintenance request', 'Maintain projects stays on track', 'Collaborate and reduce miscommunication, error & rework.', 'Track all issues & resolve them earlier.'] },
          { ftitle: 'Subcontract Management', fsrc: '../../assets/images/seedor/build5_crm8_book2_fac4.png', fdes: 'Track and maintain subcontracting with ease', list: ['Validate work order against budgetry position', 'Labour quotation comparison', 'Attendance & timesheet management'] },
          { ftitle: 'Camp Management', fsrc: '../../assets/images/seedor/build4_build6.png', fdes: 'Manage multiple camps with ease', list: ['Add multiple accommodation for employees', 'Build dynamic structure for camp with available rooms', 'Employee camp details in HR view', 'Easy internal camp transfer', 'Track real time camp information'] }
        ]
      },
      {
        Id: 7, title: 'BOOK SEEDOR', src: '../../assets/images/s2.jpg', des: 'Book Seedor is designed for any type of professional businesses with finance as key focus, it composed of CRM, Sales, HCM, Accounting and Projects as core offering. Geo location, facial recognition, Seedor bot and WhatsApp integration are some of the key highlights of the platform. Mobile apps, web apps are the channels of service delivery.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Web Application' }, { icon: 'fa-solid fa-user-gear', bdes: 'My Business Application' }, { icon: 'fa-solid fa-handshake-simple', bdes: 'Associate\Partner Web Application' }, { icon: 'fa-solid fa-file-export', bdes: 'File Transfer Application' }, { icon: 'fa-solid fa-mobile', bdes: 'Admin Mobile Application' }, { icon: 'fa-solid fa-chart-line', bdes: 'Business Analytic Application' }],
        features: [
          { ftitle: 'Multicompany finance & accounting solution.', fsrc: '../../assets/images/seedor/book1_crm3_crm7.png', fdes: 'Single company with multiple branch and cost center concept', list: ['Unit level role based access control', 'Complete Workflow for branch support', 'Branch support on product template and variant', 'Branch wise sales analysis report'] },
          { ftitle: 'Ensure reliability in accounting', fsrc: '../../assets/images/seedor/build5_crm8_book2_fac4.png', fdes: 'Warning and alerts to control key accounting parameters', list: ['Warning types like ignore with restricted role access', 'Confirm purchase order and bill for restricted budget', 'Different warning types in budget lines', 'Validate and confirm vendor bills and purchase order'] },
          { ftitle: 'Streamline process and reports.', fsrc: '../../assets/images/seedor/bill_book3_fac6.png', fdes: 'Manage recurring financial activity effortless', list: ['Automate recurring payments, receipt and invoices', 'Universal Workflow across the accounting system', 'Easier real-time data management', 'Fiscal year & Period management', 'External integration choices'] },
          { ftitle: 'Partner & accrual management', fsrc: '../../assets/images/seedor/bill4_my3_book4.png', fdes: 'Built-in support for bank, vendor, customer & inter-company reconciliation', list: ['Avoid late payments and penalties from banks', 'Mark off all new activity from the external document', 'Run Aging Reports and credit followup', 'Automated bank reconciliation process.'] },
          { ftitle: 'Credit Control & Cash Management', fsrc: '../../assets/images/seedor/book5.png', list: ['Template based automated credit followup', 'Customer based prise list, credit period and credit limit', 'Tax support and integration adapters', 'Adapters for major payment aquirers.'] },
          { ftitle: 'Petty Cash Management', fsrc: '../../assets/images/seedor/book6.png', fdes: 'Track & control your expenses easily', list: ['Control personal & project expenses', 'Manage your expense on the move.', 'Speed up the approval process.', 'Record employee advances and reimbursements'] },
          { ftitle: 'Multi currency, language & company support.', fsrc: '../../assets/images/seedor/book7.png', fdes: 'Personalized account management with 360° customer context', list: ['Manage global transactions in the local currency', 'Single platform for all your business needs.', 'Translate your system into any language', 'Auto convert deals to the local currency', 'RTL support for languages like Arabic and Hebrew'] }
        ]
      },
      {
        Id: 8, title: 'BILL SEEDOR', src: '../../assets/images/s5.jpg', des: 'Bill Seedor engages with retail business in a dynamic and integrated manner, be it a complex distribution business, or a hypermarket type or a single counter shop, bill seedor can do the automation in no time. Centralized inventory and finance management offers 360-degree strategic view of the unit.',
        bundle: [
          { icon: 'fa-solid fa-cart-shopping', bdes: 'Ecommerce Website' }, { icon: 'fa-solid fa-briefcase', bdes: 'My Business Portal' }, { icon: 'fa-solid fa-store', bdes: 'Marketplace  Website' }, { icon: 'fa-solid fa-truck-field', bdes: 'Supplier Portal' }, { icon: 'fa-solid fa-mobile-screen-button', bdes: 'Customer Mobile App' }, { icon: 'fa-solid fa-person-biking', bdes: 'Delivery Boy Mobile App' }],
        features: [
          { ftitle: 'Customer Loyalty Program', fsrc: '../../assets/images/seedor/bill1.png', fdes: 'The structured use of  gamification, commercial incentives, marketing tactics makes your customer  happier', list: ['Increased Customer Retention', 'Fun way of saying thanks to the loyal customers.', 'improve business advocacy.'] },
          { ftitle: 'Electronic Receipts - Go Green', fsrc: '../../assets/images/seedor/bill2.png', fdes: 'E-invoicing ensures faster time till payment and is one of the drivers for excellent customer experience and retention.', list: ['Faster & Accurate information access', 'Help the mother earth, use less paper', 'Paper less workflows with high accuracy.'] },
          { ftitle: 'AI Powered reordering rules', fsrc: '../../assets/images/seedor/bill3_book3_fac6.png', fdes: 'Leverage the power of data science and AI in your business, get deeper business incite with data analytics .', list: ['Automated Purchase execution', 'Prevent stock-outs and over stock', 'Product service levels agreement', 'Purchase Planning, Cost analysis, Vendor discounts', 'Vendor lead times, Budget constraints'] },
          { ftitle: 'Remote monitoring with centralized dashboard', fsrc: '../../assets/images/seedor/bill4_my3_book4.png', fdes: 'Simple, accurate time tracking and effective monitoring, ensure the expected productivity.', list: ['Time and Attendance', 'Real-Time Monitoring', 'Productivity Tracking', 'Activities Tracking'] },
          { ftitle: 'E-commerce platform', fsrc: '../../assets/images/seedor/bill5.png', fdes: 'Ensures efficient integration and data synchronization with our e-commerce, woocommerce adapters.', list: ['Ready built adapters for Woocommerce Connector', 'Web Services for external integration', 'integration with online portal and mobile app.', 'Adapters for payment gateways, marketplace etc...'] },
          { ftitle: 'Customer friendly mobile app', fsrc: '../../assets/images/seedor/bill6.png', fdes: 'E-commerce & mobile enablement are the key offerings of the platform.', list: ['Self-branded mobile apps on android & IOS stores', 'Customized e-commerce platform', 'Manage customer loyalty program', 'Real time order traceability in mobile app'] },
          { ftitle: 'Order tracking & deliveiry management', fsrc: '../../assets/images/seedor/bill7_fac8.png', fdes: 'Track sales and delivery process in real time, ensure efficient service', list: ['Get a complete overview of deliveries', 'Improved driver efficiency', 'Better order tracking', 'Delivery Traceability'] },
          { ftitle: 'Digitization for retail business', fsrc: '../../assets/images/seedor/crm5_bill8.png', fdes: 'Degitise your retail business effortlessly and be on top of the technological trend', list: ['Purchase Tender, RFQ, Vendor management', 'Multi-order Processing, Cash control & Price List', 'Barcode support, Product categories', 'Sales Quotation, Sales Ordering, Invoicing & Payment', 'Inventory Adjustments, Packing, Scrap Products', 'Lot no/Batch no/Box by Box approach/FIFO', 'Put away & Removal strategies'] }
        ]
      }
    ];
    let id = this.route.snapshot.paramMap.get('id');
    this.data = this.mainData[id];
  }


}
