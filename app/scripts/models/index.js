/*global StockFilterApp, Backbone*/

StockFilterApp.Models = StockFilterApp.Models || {};

(function () {
    'use strict';

    StockFilterApp.Models.Index = Backbone.Model.extend({

        initialize: function () {
        },

        url: function () {
            return '/funds/index/';
        },

        sdgs: {
            "No Poverty": ["MA", "BNS", "K", "AON", "UN", "RIO", "BAK", "KO", "FMS", "SNY"],
            "Zero Hunger": ["MA", "BAK", "ABT", "AGU", "CSX", "LLY", "PHG", "NASDAQ", "SYT", "TECK"],
            "Good Health and Well-Being": ["UN", "SNY", "AZN", "CSX", "LLY", "FDX", "GE", "TTM", "JNJ", "PFE"],
            "Quality Education": ["MA", "BCS", "C", "CS", "FLR", "HSBC", "TTM", "MYL", "WMT", "WU"],
            "Gender Equality": ["MA", "K", "RIO", "KO", "C", "ENB", "GS", "JNJ", "WMT", "XRX"],
            "Clean Water and Sustainability": ["UN", "KO", "ABB", "DWDP", "LLY", "F", "GFI", "INTC", "SPGI", "TEVA"],
            "Affordable and Clean Energy": ["ABB", "C", "LLY", "E", "TTM", "MYL", "PEP", "PHG", "TECK", "TSLA"],
            "Decent Work and Economic Growth": ["BAK", "KO", "C", "F", "HPE", "RCL", "STO", "UBS", "UNP", "V"],
            "Industry, Innovation, and Infrastructure": ["UN", "BAK", "AAPL", "MT", "AZN", "CX", "HPE", "SCTY", "TSLA", "VALE"],
            "Reduced Inequalities": ["UN", "ABT", "BCS", "BBL", "CX", "CL", "F", "GM", "HPE", "UBS"],
            "Sustainable Cities and Communities": ["MA", "KO", "ABB", "CX", "C", "FDX", "GM", "MYL", "NKE", "NVO"],
            "Responsible Consumption and Production": ["UN", "KO", "BUD", "GSK", "GG", "JNJ", "NKE", "PEP", "PHG", "WMT"],
            "Climate Action": ["FMS", "AGU", "BUD", "BP", "C", "E", "HSBC", "RDS.A", "STO", "TOT"],
            "Life Below Water": ["SNY", "AMZN", "AZN", "BAC", "LLY", "E", "TILE", "JNJ", "GMCR", "DIS"],
            "Life on Land": ["UN", "ABT", "CPB", "CAT", "GG", "HSBC", "TTM", "STO", "SYT", "XRX"],
            "Peace, Justice and Strong Institutions": ["MA", "KO", "BBL", "CB", "LLY", "FLR", "GE", "INTC", "MYL", "TM"],
            "Partnerships for The Goals": ["KO", "SNY", "BP", "DWDP", "HSBC", "JNJ", "MYL", "RDS.A", "NASDAQ", "TRIP"],
            "All": ["MA", "UN", "BAK", "KO", "C", "LLY", "HSBC", "TTM", "JNJ", "MYL"]
        },

        sdgCompanies: {
            "companies": {
                "Mastercard Inc": {
                    "companyName": "Mastercard Inc",
                    "nickName": "MasterCard Inc.",
                    "exchange": "NYSE",
                    "ticker": "MA",
                    "url": "https://www.mastercard.com",
                    "No Poverty": {
                        "rank": "1",
                        "story": "MasterCard, with US$11 million of funding from a charitable foundation, has established MasterCard Labs which is an innovation lab in East Africa aiming to expand digital financial services to 100 million people globally. It will generate new ideas with local entrepreneurs, Government and other stakeholders across East Africa, while an additional US$8 million was reserved for ideas reaching the incubation phase."
                    },
                    "Zero Hunger": {
                        "rank": "8",
                        "story": "MasterCard and the World Food Programme have rolled out an innovative e-voucher program in Lebanon to deliver food assistance to Syrian refugees. In April alone, nearly US$20 million was injected into local markets. Today, about 715,000 refugees buy food at nearly 250 merchants who saw a 6-12% increase in revenues. The program intended to reach 1.1 million refugees in 2014. A similar program in Jordan will distribute US$250 million n food assistance and reach 710,000 Syrian refugees this year."
                    },
                    "Quality Education": {
                        "rank": "3",
                        "story": "MasterCard has partnered with the Confederation for All India Traders to promote the digitization of payments among Indian traders, through knowledge sharing and training sessions across the country, in line with the Government’s ‘Digital India’ vision."
                    },
                    "Gender Equality": {
                        "rank": "9",
                        "story": "MasterCard has launched Girls4Tech, an educational outreach program that targets teenage girls to encourage STEM (science technology engineering math) careers. This program is currently live in India, Duai, Frankfurt, and London."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "6",
                        "story": "MasterCardisaLeadPartneroftheSmartCities Council, an industry coalition to advance smart city development and innovation. This initiative will equip city leaders with the tools and resources to better plan,  nance, and deploy cutting-edge smart city technologies."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "7",
                        "story": "MasterCard, in partnership with the Government of Nigeria, has rolled out a biometric National eID Card to more than 13 million Nigerians with electronic payment functionality. This program will reach more than 100 million Nigerians, making it the broadest financial inclusion initiative of its kind on the African continent."
                    },
                    "All": "gold"
                },
                "Bank of Nova Scotia": {
                    "companyName": "Bank of Nova Scotia",
                    "nickName": "Scotiabank",
                    "exchange": "NYSE",
                    "ticker": "BNS",
                    "url": "http://www.scotiabank.com/",
                    "No Poverty": {
                        "rank": "2",
                        "story": "Scotiabank is working to advance financial inclusion and economic development of communities through technology including mobile banking, relevant products (including low/no fee accounts), micro and consumer financing, small business lending, and financial education."
                    }
                },
                "Kellogg Company": {
                    "companyName": "Kellogg Company",
                    "nickName": "Kellogg's",
                    "exchange": "NYSE",
                    "ticker": "K",
                    "url": "http://www.kelloggcompany.com/",
                    "No Poverty": {
                        "rank": "3",
                        "story": "Starbucks offers a drink called the Oprah Chai. A portion of the money earned whenever a drink is purchased will go directly to Oprah Winfrey’s charity, the Leadership Academy Foundation. The foundation pledges to bring educational opportunities, especially opportunities for higher education, to girls in South Africa."
                    },
                    "Gender Equality": {
                        "rank": "7",
                        "story": "Kellogg Company has launched a series of projects to understand and help overcome the barriers (including limits to accessing skills, information and inputs) for women in cocoa farming communities in Côte d’Ivoire. The projects include gender sensitization training, situational analysis, and training for up to 1,000 women farmers to help them improve their agricultural and business skills, supported by the African Cocoa Initiative."
                    }
                },
                "Aon PLC": {
                    "companyName": "Aon PLC",
                    "nickName": "Aon PLC",
                    "exchange": "NYSE",
                    "ticker": "AON",
                    "url": "http://www.aon.com/",
                    "No Poverty": {
                        "rank": "4",
                        "story": "For almost 20 years, Aon Limited and other companies and insurance brokers, local authorities and registered social landlords in the UK to provide tenants with accessible, affordable home contents insurance. The cover is paid mainly with rent, on a weekly basis, with a zero excess feature, and in many cases without the need for a bank account."
                    }
                },
                "Unilever NV (ADR) ADR": {
                    "companyName": "Unilever NV (ADR) ADR",
                    "nickName": "Unilever",
                    "exchange": "NYSE",
                    "ticker": "UN",
                    "url": "https://www.unilever.com/",
                    "No Poverty": {
                        "rank": "5",
                        "story": "Unilever supports several companies to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                    },
                    "Good Health and Well-Being": {
                        "rank": "1",
                        "story": "Unilever has invested in innovative campaigns and partnerships to improve oral health, recognizing the opportunity to grow its business while having a positive impact on health. These include investments in Africa which increased revenue by over a quarter from 2014 to 2015 against a background of poor oral health caused by lack of fluoride toothpaste and scarce dental care, and with 95% of 11 to 14-year-olds from low-income families suffering from untreated dental decay. The company’s market-leading brand, Signal, drives communications to raise awareness and improve tooth brushing habits. Signal is also known as Pepsodent (Asia and Latin America), Mentadent (Italy), Zhong Hua (China), Aim (Greece), and P/S (Vietnam). The Signal brand aims to reach 50 million people by 2020, which was already exceeded by 2015, with 71 million people reached via innovative campaigns and partnerships."
                    },
                    "Clean Water and Sustainability": {
                        "rank": "10",
                        "story": "Unilever has developed a new soap that offers better germ-fighting efficacy. In addition to providing better protection against bacteria that cause stomach infections, typhoid, and cholera, it also combats skin and eye infections. As a result, this innovation has created an affordable product that addresses serious health risks, while also helping grow the company’s overall brand, with saes up 15% in 2014."
                    },
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "2",
                        "story": "Unilever, with their many innovations in their many subsidiary companies, has created a more sustainable infrastructure for the world."
                    },
                    "Reduced Inequalities": {
                        "rank": "8",
                        "story": "Several food, beverage, and consumer goods companies, including Unilever, have become accredited Living Wage Employers for paying their UK employees a minimum of the Living Wage, an hourly rate which is set independently by the Living Wage Foundation according to the cost of living in the UK. This has been shown to improve employee productivity and retention and reduce absenteeism."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "5",
                        "story": "Some companies, including Unilever, are Carbon Pricing Champions and have aligned with the Business Leadership Criteria on Carbon Pricing. This includes setting an internal carbon price high enough to affect investment decisions to drive down greenhouse gas emissions materially. The REFLEX Project is a collaborative Research and Development project which aims to create a circular economy for flexible packaging (-currently comprising over 560,000 tonnes of UK land ll each year). The Project is exploring ways of increasing the recyclability of flexible packaging by targeting each step in the supply chain – pack design, manufacture, sorting and reprocessing. It aims to develop: new innovative packaging designs; techniques to make blended polymers from flexible packaging which perform in new uses; and improved identification and sorting of recyclable, flexible packages from the waste stream. The Project is an example of the whole supply chain working together: leading brands, polymers producers, packaging converters, recycling companies and technology suppliers. It is co-funded by Innovate UK, an executive non-departmental public body. Project partners include Unilever UK Central Resources Ltd"
                    },
                    "Life on Land": {
                        "rank": "7",
                        "story": "Unilever and the World Wildlife Fund have announced a one-year, international partnership to engage consumers in the fight against deforestation. As part of the partnership, Unilever and the World Wildlife Fund will help protect a million trees by supporting forest protection programs in Brazil and Indonesia. The company believes that this partnership is an opportunity to engage consumers on sustainability issues and give them practical ways to make a difference."
                    },
                    "All": "platinum"
                },
                "Rio Tinto plc": {
                    "companyName": "Rio Tinto plc",
                    "nickName": "Rio Tinto",
                    "exchange": "NYSE",
                    "ticker": "RIO",
                    "url": "http://www.riotinto.com/",
                    "No Poverty": {
                        "rank": "6",
                        "story": "Rio Tinto Minera Peru’s La Granja Project developed an approach that integrated and aligned the business and project schedule with a responsible approach to engagement and agreement-making on land access. The company worked with local communities to design and implement an engagement process to discuss the possibility of land acquisition and resettlement if the project proceeded, and agree on general terms and principles that would be applied in future negotiations. During the process, community members had the opportunity to share their concerns, fears, and interest in considering the possibility of resettlement. The process also yielded critical information for the company on the likelihood and potential costs of land acquisition and resettlement."
                    },
                    "Gender Equality": {
                        "rank": "8",
                        "story": "Rio Tinto and the Centre for Social Responsibility in Mining at the University of Queensland, Australia developed a how-to guide that provides specific suggestions on gender-sensitive approaches to engaging with communities and stakeholders and finding solutions that benefit both the company and society. The guide provides a rationale for integrating gender into the business and shares relevant international protocols. Clear explanations that follow a management system approach offer specific how-to steps along with case studies."
                    }
                },
                "Braskem SA (ADR) ADR Class A": {
                    "companyName": "Braskem SA (ADR) ADR Class A",
                    "nickName": "Braskem",
                    "exchange": "NYSE",
                    "ticker": "BAK",
                    "url": "https://www.braskem.com",
                    "No Poverty": {
                        "rank": "7",
                        "story": "'Ser+ realizador' is a collaborative initiative promoted by Braskem, in partnership with Ambev, Bunge, Gerdau and Sebrae, which aims to increase recycling of post-consumption waste in Brazil while also supporting the social and economic development of waste recycling workers. The initiative fostered increased efficiency in the recycling value chain through investments in equipment and infrastructure of the waste sorting and processing units, as well as training and personalized consulting for recycling workers. In turn, this enables workers to increase their productivity and income. In 2015, ser+ realizador benefitted 70 cooperatives, comprising over 3,538 waste recycling workers. The best results were achieved by the 48 cooperatives who received monthly guidance. These cooperatives sent more than 25,000 tons of waste for recycling (12% of which referred to plastics in Braskem’s value chain: PP, PE and PVC), and saw 70% of their members increasing their income in the year."
                    },
                    "Zero Hunger": {
                        "rank": "7",
                        "story": "Braskem, a petrochemical company, and leading biopolymer producer produces resins for plastic films used in agriculture to cover soil, knows as mulches. In 2015, in partnership with Eletro Plastic and the Federal University of Uberlândia in Brazil, Braskem developed a field study on the use of mulching in coffee crops. After a year and a half of planting, the study found that crops with mulching had better results than control samples because mulching prevents the development of weeds, thereby reducing costs and the need for pre-emergent herbicides. The solution also saves significant amounts of water by reducing water evaporation, thereby allowing the area to remain moist with reduced irrigation."
                    },
                    "Decent Work and Economic Growth": {
                        "rank": "8",
                        "story": "With a view to promoting sustainable and equitable growth in its value chain, Braskem created Braskem Labs, a program that select selects entrepreneurs using Braskem’s products (chemical products and plastic applications) in an innovative way to address socio-environmental issues. The program, delivered in partnership with Endeavor, a global NGO focused on helping entrepreneurs succeed, provides intensive capacity building, including one-on-one mentoring with Braskem executives, with a view to accelerating the companies’ growth and scaling up their operations to maximize social and environmental bene ts. It also provides access to markets, investors and Braskem partners. Projects supported in 2015 include a low-price prosthetic foot, a PVC house that can be built in 2 days, and sanitation and rainwater storage solutions."
                    },
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "7",
                        "story": "With a view to promoting sustainable and equitable growth in its value chain, Braskem created Braskem Labs, a program that selects entrepreneurs using Braskem’s products (chemical products and plastic applications) in an innovative way to address socio- environmental issues. The program, delivered in partnership with Endeavor, a global NGO focused on helping entrepreneurs succeed, provides intensive capacity building, including one-on-one mentoring with Braskem executives, with a view to accelerating the companies’ growth and scaling up their operations to maximize social and environmental bene ts. It also provides access to markets, investors and Braskem partners. Projects supported in 2015 include a low-price prosthetic foot, a PVC house that can be built in 2 days, and sanitation and rainwater storage solutions."
                    },
                    "All": "bronze"
                },
                "The Coca-Cola Co": {
                    "companyName": "The Coca-Cola Co",
                    "nickName": "Coca-Cola Co.",
                    "exchange": "NYSE",
                    "ticker": "KO",
                    "url": "http://www.coca-cola.com/",
                    "No Poverty": {
                        "rank": "8",
                        "story": "Coca-Cola Co. supports several companies to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                    },
                    "Gender Equality": {
                        "rank": "10",
                        "story": "In 2010, The Coca-Cola Company announced 5by20, a commitment to enable the economic empowerment of five million women entrepreneurs across the company’s global value chain by 2020. Coca-Cola does this by working with partners to develop and implement business skills training, providing access to funding and increasing opportunities for mentoring. At year-end 2014, the 5by20 initiative had reached more than 865,000 women in 52 countries sice it began in 2010."
                    },
                    "Clean Water and Sustainability": {
                        "rank": "9",
                        "story": "The Coca-Cola Company has set an ambitious target to safely return to communities and nature an amount of water equal to what the company uses in its finished beverages and their production, by 2020. Based on the Coca-Cola system’s global water replenishment projects through to December 2014, the system is balancing the equivalent of an estimated 94% of the water used in its finished beverages, based on 2014 sales volume. Between 2004 -2014, Coca-Cola replenished an estimated 153.6 billion liters of water back to communities and nature through 209 community water projects in 61 countries. In addition, in 2014 the Coca-Cola system returned approximately 126.7 billion liters of water used in its manufacturing processes back to communities and nature though treated wastewater."
                    },
                    "Decent Work and Economic Growth": {
                        "rank": "9",
                        "story": "The Coca-Cola Company created Micro Distribution Centers (MDCs) to solve the problem of access to its product for countries such as Ethiopia. Narrow roads meant that big delivery trucks could not reach the tiny local shops and a lack of storage facilities meant that stores could not stock large amounts of the drinks. MDCs are local depots in hard to reach areas that delivery trucks cannot travel through. The people who set up these MDCs employ others to sell and distribute the drinks, often by bicycle or pushcart. These MDCs are fully owned by African entrepreneurs, and work with local bottlers. There are now more than 3000 MDCs in Africa. As the program expands, the company hopes for 50% or more of these MDCs o be owned by women."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "1",
                        "story": "The Coca-Cola Company has invested over US$500m in cities in Vietnam, developing local manufacturing and distribution capacity, developing new filling lines and installing new cold-drink coolers with local customers, helping local businesses boost beverage sales. This investment has created 500 new jobs locally in Vietnam, with 99% of its total labor force filled by local Vietnamese employees. These direct jobs then generated an estimated additional 5,000 job opportunities in supporting industries. It has also continued to invest heavily in building sustainable communities in Vietnam with approximately US$1.5 million dedicated to local projects since 2010."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "6",
                        "story": "Coca-Cola and others commissioned independent research teams, supported by their companies and Oxfam (a not-for-pro t organization), to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "3",
                        "story": "Coca-Cola is actively working with stakeholders to foster transparency and greater respect for human rights."
                    },
                    "Partnerships for The Goals": {
                        "rank": "10",
                        "story": "Coca-Cola and others commissioned independent research teams, supported by their companies and Oxfam (a not-for-profit organization), to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                    },
                    "All": "diamond"
                },
                "Fresenius Medical Care AG and Co. (ADR)": {
                    "companyName": "Fresenius Medical Care AG and Co. (ADR)",
                    "nickName": "Fresenius Medical Care",
                    "exchange": "NYSE",
                    "ticker": "FMS",
                    "url": "https://fmcna.com/",
                    "No Poverty": {
                        "rank": "9",
                        "story": "Fresenius MedicalCare aims to develop innovative products that are not only of the highest quality but are also affordable so that more caregivers and patients can benefit from them. Based on its experience in operating the company’s own dialysis clinics, it does not consider these to be incompatible aims. Between 2013 and 2015, Fresenius has reorganized its research and development activities towards a more global approach which enables the company to respond even better to the demand for improved high-quality yet cost-efficient treatment methods. In doing so, the company continues to take regional market conditions into account by offering a differentiated product range in more than 120 countries. Its new RandD strategy is focused on improving the company’s ability to deliver innovative, competitive products on time and enhancing focus on developing countries."
                    },
                    "Climate Action": {
                        "rank": "10",
                        "story": "Fresenius Medical Care provides funds, dialysis machines and medical supplies for institutions that need specific aid quickly in crisis situations such as natural disasters resulting from climate change. For example, in North America, the Fresenius Medical Care Incident Command Center coordinates emergency task forces in critical situations such as during hurricanes, storm surges or in the tornado season, in collaboration with the Kidney Community Emergency Response Coalition. After the devastating earthquake in Nepal in 2015, the company provided dialysis machines, water treatment systems, and disposable accessories, enabling dialysis patients to receive their vital treatment even though many medical facilities and items of equipment were badly damaged by the earthquake."
                    }
                },
                "Sanofi SA (ADR)": {
                    "companyName": "Sanofi SA (ADR)",
                    "nickName": "Sanofi",
                    "exchange": "NYSE",
                    "ticker": "SNY",
                    "url": "http://en.sanofi.com/",
                    "No Poverty": {
                        "rank": "10",
                        "story": "Sanofi and PlaNet Finance (a not-for-profit organization) have committed to the fight against poverty and to providing access to healthcare for disadvantaged populations, particularly in Madagascar and Benin, through the creation of supplemental health care coverage programs. In Madagascar, most of the Malagasy population works in the agricultural sector under dif cult conditions. Their low incomes make it dif cult to pay for healthcare. To promote access to quality healthcare for Malagasy entrepreneurs, the Sano supported ZINA project enabled a health micro-insurance platform to be established in six Madagascar regions. To date, ZINA has supported nearly 10,000 beneficiaries."
                    },
                    "Good Health and Well-Being": {
                        "rank": "5",
                        "story": "Sanofi has developed an AllStar™ pen which it describes as ‘a state of the art insulin pen for patients in emerging markets.' The pen demonstrates the company’s focus on innovation diabetes and its commitment to finding solutions that are adapted to local market needs. To improve access to affordable devices, in 2012 Sanofi India Limited launched the first re-usable insulin pen manufactured by a global company in India. Allstar™ manufacturing requires state of the art and well-controlled processes that Sanofi transferred through a collaborative approach to two local manufacturers based in India. AllStar™ is indicated for patients already using products in Sano ’s insulin portfolio as well as those who are starting to take insulin for the first time. Since it was launched in India, AllStar™ has been marketed in several additional emerging countries including Bangladesh, South Africa, Malaysia, Thailand, and Egypt. In 2015, Sanofi joined Be He@lthy Be Mobile, a ground-breaking initiative led by the International Telecommunication Union (ITU) in collaboration with the WHO, public-private sector organizations, Governments, the United Nations, industry, and academia, in the field of non-communicable diseases. Using mobile technology, the program helps improve the prevention, treatment, and care of non-communicable diseases in more than eight priority countries globally. In diabetes, mobile solutions represent a unique opportunity to create a much-needed continuum of care, from prevention advice to diabetes support for different population segments. A project has already started in Senegal which includes targeted SMS messaging to the general population, people with diabetes and healthcare professionals."
                    },
                    "Life Below Water": {
                        "rank": "10",
                        "story": "Sanofi supports take-back programs that collect unused and expired medicines from patients and inform consumers about their safe disposal. This initiative aims to protect local ecosystems, as many consumers incorrectly flush unused medicines down the toilet, resulting in contamination of water resources. Sanofi has supported such programs in 15 countries, including Brazil, Colombia, Mexico, Philippines, Saudi Arabia and Venezuela. In Colombia, the Punto Azul (Blue Point) program has set up collection points for unused medicines across 23 Colombian states, representing 48% of the country’s population. This program, which is funded by manufacturers and importers of medicines, was created by the National Association of Colombian Enterprises (ANDI) in 200."
                    },
                    "Partnerships for The Goals": {
                        "rank": "9",
                        "story": "In January 2012 Sanofi entered into a data sharing collaboration with the Worldwide Antimalarial Resistance Network (WWARN), to aid in its attempt to detect and fight resistance to current anti-malarial drugs around the world. Through this agreement, Sanofi will provide data to WWARN’s central database of information relating to antimalarial drug resistance, for medication developed by Sanofi and the Drugs for Neglected Diseases initiative (DNDi). Although mortality rates due to malaria have fallen by more than 25% since 2000, these gains are now threatened by an emerging resistance to the globally-recommended artemisinin-combination therapies in Southeast Asia. It is therefore crucial that all stakeholders join forces to monitor and fight the spread of these resistances to life-saving drugs, and invest in the search for new medicines. In 2013 Sanofi signed a similar partnership with ACT Consortium in order to share safety data on this anti-malarial medicine with academic researches."
                    }
                },
                "ABB Ltd (ADR)": {
                    "companyName": "ABB Ltd (ADR)",
                    "nickName": "ABB Ltd.",
                    "exchange": "NYSE",
                    "ticker": "ABB",
                    "url": "http://new.abb.com/",
                    "Clean Water and Sustainability": {
                        "rank": "7",
                        "story": "Abbott has achieved a 19% reduction in its water intake (adjusted for sales) against its commitment of a 30% reduction by 2020, compared to its 2010 level. It has used global water risk mapping tools from the World Resource Institute (WRI) and the WBCSD to help identify manufacturing plants in water-stressed regions, and it is participating in the CDP Water Reporting Program to share critical data on its water performance while also gaining valuable insights into the water performance of other companies in the healthcare sector and beyond. Some of Abbott’s nutrition sites achieving significant reductions in water use include: its Columbus, Ohio, plant reduced water usage by more than 46 million gallons (13% annually) through cooling tower water reclamation and reuse, among other projects; its China facility decreased water usage by 12% through projects such as recovering evaporator condensate which also saved fuel."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "6",
                        "story": "ABB Ltd. is a pioneer in microgrids. In April 2016 ABB announced a new innovation building on Emax 2, which it describes as the first ever combined circuit breaker and power manager. The new software-based innovation for the Emax 2 smart circuit breaker makes microgrid architectures simpler and more cost-effective than ever before. The new upgrades combine advanced protection, programmable logic, full connectivity, easy integration and comprehensive microgrid energy management in one device. ABB has executed 30 microgrid projects globally which coordinate distributed energy resources, integrating renewables with conventional power sources, networking with the grid or operating self-sufficiently. Low-voltage microgrids are helping accelerate the rollout of renewable energy by integrating small-scale wind or solar energy production of up to 4MW with battery energy storage systems."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "7",
                        "story": "ABB Ltd. has developed a new automated fast-charging system which removes the main hurdles to the more widespread use of electric buses. With a typical charging time of 4-6 minutes, the system speeds up the charging process and is easily integrated into existing bus lines, thanks to its automated rooftop connection. ABB Ltd. presented its voice-operated smart home automation system, ABB-free@home, at a consumer electronics fair in 2015. The system allows users to control over 60 smart home automation functions, such as lighting, heating, blind control and door communication, with voice commands. This can significantly improve home energy efficiency."
                    }
                },
                "Abbott Laboratories": {
                    "companyName": "Abbott Laboratories",
                    "nickName": "Abbott Labs",
                    "exchange": "NYSE",
                    "ticker": "ABT",
                    "url": "www.abbott.com/",
                    "Zero Hunger": {
                        "rank": "2",
                        "story": "Abbott’s new production facility in Jhagadia will source up to 80% of its ingredients locally in India in order to meet the growing demand for milk in India while building the supply of high-quality milk needed for Abbott’s growing nutrition business. Working with local suppliers, Abbott is providing tools, training and modern milk cooling facilities to increase the production of high-quality milk, which will, in turn, raise rural farmer incomes.Because women play a key role in dairy farming – yet often have little decision-making power – the company is also training women dairy farmers, improving their technical and business skills. Abbott is pursuing a similar strategy around the world as demand for dairy products and better nutrition rises with incomes and with growing urbanization."
                    },
                    "Reduced Inequalities": {
                        "rank": "9",
                        "story": "Abbott believes that diversity in its suppliers is essential to its ability to compete, so it collaborates with diverse groups that reflect the community it serves. The company finds that diversity brings new perspectives to the table as it works to develop collaborative, innovative solutions. Abbott’s supplier diversity policy ensures equitable opportunities are afforded to businesses that are either small or are majority owned and operated by a woman, a member of an ethnic minority, a veteran or a person with a disability. In 2015, this spend was US$950 million, representing 8% of total spend in Abbott’s global supply chain. This included a 4% annual increase in spending with small businesses and a 5% increase in spending with small women-owned businesses. One example of success in 2015 was Abbott’s expansion of its partnership with Marathon Medical, a veteran-owned business, through an agreement to supply the U.S. Indian Health Service with US$30 million of supplies."
                    },
                    "Life on Land": {
                        "rank": "8",
                        "story": "Abbott’s nutrition plant in Jhagadia, India, reuses water from the plant to nourish a forest of eucalyptus and casuarina trees planted on-site. Studies show these efforts are improving the groundwater table and soil fertility."
                    }
                },
                "Agrium Inc. (USA)": {
                    "companyName": "Agrium Inc. (USA)",
                    "nickName": "Agrium Inc.",
                    "exchange": "NYSE",
                    "ticker": "AGU",
                    "url": "www.agrium.com/",
                    "Zero Hunger": {
                        "rank": "10",
                        "story": "Agrium has worked with stakeholders to develop the 4R Solution to help smallholder farmers sustainably increase yields and profitability on their farms. This is accomplished under a Solution model that uses on-farm demonstrations to provide growers with nutrient management knowledge and regionally specific 4R nutrient recommendations created through the Nutrient Expert® decision support software and by increasing local adoption of these recommendations by expanding extension capacity. The Solution is scaled through shared value partnerships which bring government, NGOs and the private sector together to expand extension capacity, while the fertilizer industry, researchers, and smallholders develop regionally specific 4R recommendations using Nutrient Expert. The end result is increased yields and profits that smallholder farmers can use to expand their farming operations and increase access to education, healthcare and a more stable and nutritious food supply. The Solution is being expanded from Kenya where over 3,000 farmers, 100 extensions officers, and 300 undergraduates have been trained on 4R practices and management, to other countries."
                    },
                    "Climate Action": {
                        "rank": "8",
                        "story": "Agrium has been a leader in developing the 4R based Nitrous Oxide Emission Reduction Protocol (NERP), adopted to reduce GHG emissions resulting from nitrogen applications at the farm level. The protocol is globally scalable, and it is currently being regionally customized to consider each region’s unique climate, soil, farming practices and culture. While the potential of this solution is still being quantified, early estimates of emission reduction from nutrient stewardship practices exceed 8 Mt in North America alone. The protocol quantifies these nitrous oxide reductions, which are then traded where carbon offset markets exist, or they are used in voluntary value chain programs to deliver on stakeholder commitments to improve sustainability performance. Development of new 4R source, rate, time, and place best management practices through new innovations in precision agriculture, controlled release fertilizers, data management and validation will further optimize these reductions while increasing local jobs and economic returns."
                    }
                },
                "Amazon.com, Inc.": {
                    "companyName": "Amazon.com, Inc.",
                    "nickName": "Amazon",
                    "exchange": "NASDAQ",
                    "ticker": "AMZN",
                    "url": "https://www.amazon.com/",
                    "Life Below Water": {
                        "rank": "9",
                        "story": "Amazon, with their acquisition of Whole Foods, is on the cutting edge of seafood reproduction and protocol to continue to help our oceans become a beacon for life n earth."
                    }
                },
                "Anheauser Busch Inbev NV (ADR)": {
                    "companyName": "Anheauser Busch Inbev NV (ADR)",
                    "nickName": "Anheuser Busch",
                    "exchange": "NYSE",
                    "ticker": "BUD",
                    "url": "www.anheuser-busch.com/",
                    "Responsible Consumption and Production": {
                        "rank": "9",
                        "story": "Anheuser-Busch InBev’s energy reduction policies have saved the company more than US$ 55 million since 2012, including more than $24 million in 2014. The company challenged itself to meet four goals by 2017: reduce global energy use per hectolitre by 20%, reduce global greenhouse gas emissions per hectolitre of production by 10% (including a 15% reduction in China), reach a 70% global average of eco-friendly cooler purchases annually, and reduce GHG emissions in logistics by 15%. The company has already achieved its emissions goals three years ahead of schedule and hopes to continue increasing efficient operations."
                    },
                    "Climate Action": {
                        "rank": "1",
                        "story": "Anheuser-Busch InBev announced a commitment to secure 100% of the company’s purchased electricity from renewable sources by 2025."
                    }
                },
                "Apple Inc.": {
                    "companyName": "Apple Inc.",
                    "nickName": "Apple",
                    "exchange": "NASDAQ",
                    "ticker": "AAPL",
                    "url": "https://www.apple.com/",
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "8",
                        "story": "Apple, with the unveiling of their new completely sustainable work campus called, Apple Park, in California has shown that they are committed to innovating to meet the demands for a more sustainable world."
                    }
                },
                "ArcelorMittal SA (ADR)": {
                    "companyName": "ArcelorMittal SA (ADR)",
                    "nickName": "ArcelorMittal",
                    "exchange": "NYSE",
                    "ticker": "MT",
                    "url": "corporate.arcelormittal.com/",
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "5",
                        "story": "ArcelorMittal is applying a shared infrastructure approach, connecting its iron ore operations to an expanded port through the development of railway infrastructure through Liberia. The company is developing a 250km railway line from Yekepa to Buchanan and developing the iron ore terminal at Buchanan port to a capacity of 15mpta. The shortest route through Guinea for the Simandou deposit is Conakry, which is 800km away, as compared to 350km to the port of Buchanan in Liberia. The World Bank estimates that the cost savings of going through Liberia are roughly US$1 billion over a twenty year period (US$3.49 per ton via Conakry versus US$1.22 per ton via Buchanan) when the full lifecycle costs of running the two alternative railroads are taken into account."
                    }
                },
                "AstraZeneca plc (ADR)": {
                    "companyName": "AstraZeneca plc (ADR)",
                    "nickName": "AstraZeneca",
                    "exchange": "NYSE",
                    "ticker": "AZN",
                    "url": "https://www.astrazeneca.com/",
                    "Good Health and Well-Being": {
                        "rank": "10",
                        "story": "AstraZeneca has developed an access to medicines program known as Healthy Heart Africa. The number of deaths attributable to cardiovascular disease in Africa grew more significantly than any other condition from 2000 to 2012, and it is currently the third-leading killer in the region, closely behind HIV/AIDS and respiratory infections. Yet it is estimated that in some African countries less than 10% of people with hypertension have access to effective treatment. AstraZeneca launched Healthy Heart Africa in Kenya in 2014 as the first step towards its goal of treating 10 million people with hypertension in Africa over ten years. Working with local partners, AstraZeneca set about providing training and establishing healthcare centers for screening and treating patients. In 2016, the company will also establish new partnerships to continue to test approaches in Kenya and other countries in the region. There will also be an independent impact evaluation of the program to provide further insight about how Healthy Heart Africa can be expanded and scald up to other countries."
                    },
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "4",
                        "story": "AstraZeneca is constructing a new purpose-built facility on the Cambridge Biomedical Campus which is home to its UK-based global research and development center and corporate headquarters, including 2,000 employees. The company is working closely with construction partners to achieve ‘excellent’ ratings for sustainability performance under the Building Research Establishment Environmental Assessment Methodology. The steps AstraZeneca is taking include: using optimal heat differentials in cooling technology to minimize energy consumption; optimizing the use of natural light in place of artificial light; installing a combined heat and power station to meet energy needs on site; and installing rainwater recovery systems throughout the site."
                    },
                    "Life Below Water": {
                        "rank": "7",
                        "story": "AstraZeneca is continually looking for ways to better understand, avoid and manage risks associated with the presence of trace amounts of pharmaceuticals in waterways. At the start of 2015, the company initiated a €10 million (US$ 11.3 million) partnership with the European Commission under the Innovative Medicines Initiative. This project – called Intelligent Assessment of Pharmaceuticals in the Environment – aims to develop screening tools for identifying the environmental risks both earlier on in drug development and for older medicines."
                    }
                },
                "Bank of America Corp": {
                    "companyName": "Bank of America Corp",
                    "nickName": "Bank of America",
                    "exchange": "NYSE",
                    "ticker": "BAC",
                    "url": "https://www.bankofamerica.com",
                    "Life Below Water": {
                        "rank": "6",
                        "story": "Bank of America has partnered with multiple organizations to provide a safer water ecosystem in the world."
                    }
                },
                "Barclays PLC (ADR)": {
                    "companyName": "Barclays PLC (ADR)",
                    "nickName": "Barclays",
                    "exchange": "NYSE",
                    "ticker": "BCS",
                    "url": "https://www.barclays.com/",
                    "Quality Education": {
                        "rank": "4",
                        "story": "Barclays, in collaboration with Action for Children, developed the Barclays Money Toolkit to help adults and children learn about financial planning and saving. The toolkit provides guidance on identifying ways of improving participants’ financial situations; learning about financial products and language in order to make educated choices, and building on participants’ existing skills and applying them to finances."
                    },
                    "Reduced Inequalities": {
                        "rank": "10",
                        "story": "Barclays Bank which in 2007 made the commitment to exceed the London Living Wage for both employees and contracted staff, reducing absenteeism and employee turnover from 30% to 4%, while increasing performance and satisfaction levels."
                    }
                },
                "BHP Billiton plc (ADR)": {
                    "companyName": "BHP Billiton plc (ADR)",
                    "nickName": "BHP Billiton",
                    "exchange": "NYSE",
                    "ticker": "BBL",
                    "url": "www.bhp.com/",
                    "Reduced Inequalities": {
                        "rank": "2",
                        "story": "BHP Billiton awarded over US$73 million in Western Australian Iron Ore Indigenous Business Contracts during 2015, assigning over US$400 million in contracts over the past three years. Indigenous contracting is built into many of the mining majors’ Reconciliation Action Plans and indigenous engagement strategies. The company requires contractors to have a certain level of capacity and, with many indigenous businesses still growing, joint ventures are often the best option for indigenous businesses to win high-pro le work and to build their capacity. Additionally, the company has provided over 145 traineeships and apprenticeships during this period and currently employs over 940 people identifying as Aboriginal or Torres Strait Islanders."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "6",
                        "story": "BHP Billiton is committed to the role transparency plays in contributing to the governance of natural resources for the benefit of the governments and citizens of host countries. BHP Billiton has been a member of the EITI since its inception, and it voluntarily goes above minimum industry standards by publically reporting on a range of topics including payment of taxes and royalties, sustainability performance that is independently verified, and climate change portfolio analysis. In addition, the Natural Resources Governance is a Global Signature Program of the BHP Billiton Foundation. Signature projects include a two year US$2.5 million partnership with Transparency International to deliver the ‘Mining for Sustainable Development (Phase 1)’ project and a two year US$2.8 million partnership with the World Bank delivering the ‘From disclosure to development’ project. Through these global partnerships targeting improvements in governance and transparency, BHP Billiton commits, collaborates and joins in the global fight against corruption and the promotion of ethical business conduct."
                    }
                },
                "BP plc (ADR)": {
                    "companyName": "BP plc (ADR)",
                    "nickName": "BP PLC",
                    "exchange": "NYSE",
                    "ticker": "BP",
                    "url": "https://www.bp.com",
                    "Climate Action": {
                        "rank": "4",
                        "story": "In June 2015, six major oil companies (including BP) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                    },
                    "Partnerships for The Goals": {
                        "rank": "4",
                        "story": "The Abu Dhabi Regulation and Supervision Bureau partnered with BP in 2014 to model demands on energy and water resources until 2030. This was done using the newly developed ‘Foreseer’ modeling tool which was developed by the University of Cambridge through BP’s Energy Sustainability Challenge research program. The foreseer tool creates a visualization of natural resource life cycles and their interconnectivity in the context of future demand scenarios, technology improvements and policy choices in a region of interest. The tool will provide Abu Dhabi’s policymakers with valuable insights into the complex relationships between energy, land, and water, and support them in their decision-making processes to facilitate sustainable development."
                    }
                },
                "Campbell Soup Company": {
                    "companyName": "Campbell Soup Company",
                    "nickName": "Campbell Soup",
                    "exchange": "NYSE",
                    "ticker": "CPB",
                    "url": "https://www.campbellsoupcompany.com/",
                    "Life on Land": {
                        "rank": "1",
                        "story": "Campbell Soup Company has announced a collaboration with the EDF to improve water quality and reduce greenhouse gas emissions by optimizing fertilizer use and improving soil conservation in the company’s wheat sourcing areas. To achieve these goals, the company will partner with United Suppliers, a cooperative of locally owned and controlled agricultural retailers, to help deploy the SUSTAIN platform in target areas in 2015, including Nebraska and Ohio."
                    }
                },
                "Caterpillar Inc.": {
                    "companyName": "Caterpillar Inc.",
                    "nickName": "Caterpillar Inc.",
                    "exchange": "NYSE",
                    "ticker": "CAT",
                    "url": "www.caterpillar.com",
                    "Life on Land": {
                        "rank": "2",
                        "story": "Caterpillar joined an effort in 2015 to focus on restoring natural infrastructure – the forests, prairies, farmlands, wetlands and coastal landscapes. Natural infrastructure improves resilience to natural disasters like storms and floods, improves water quality and removes carbon from the atmosphere to return it to the soil, where it helps plants grow. Cat® products have supported coal mine restoration projects and restored portions of the Florida Everglades in the United States of America. In November 2015, Caterpillar hosted the first major national summit in the United States of diverse stakeholders who have a part to play in natural infrastructure restoration. The summit brought together leaders from engineering, construction, finance, governments, academia and non-governmental organizations to establish a coordinated effort across these industries to develop and deploy sustainable development solutions. Participants delved into the scientific and business cases for natural infrastructure restoration and brainstormed policies, business models and financing solutions needed to expand the world’s natural infrastructure restoration efforts."
                    }
                },
                "Cemex SAB de CV (ADR) ADR": {
                    "companyName": "Cemex SAB de CV (ADR) ADR",
                    "nickName": "Cemex",
                    "exchange": "NYSE",
                    "ticker": "CX",
                    "url": "www.cemexusa.com/",
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "10",
                        "story": "Cemex has created the program Mejoratu Calle to help communities and governments collaborate to improve neighborhoods using its cement products. Through this program, the company provides microloans to community members to help fund the pavement of streets and sidewalks with cement. By combining community contributions with government funding, most projects are completed in 70 weeks, rather than the average of 10 years in low-income neighborhoods. As a result of the program, property values and incomes rise in the communities that Mejora tu Calle serves. Since inception, more than 35,000 microloans have been allocated to finance paving over 400,000 square meters, benefiting more than 7000 low-income families. The program has the potential to expand into 50 major cities in Mexico, and ultimately replicate its process throughout Ltin America."
                    },
                    "Reduced Inequalities": {
                        "rank": "4",
                        "story": "Cemex provides all its employees around the world with a living wage while protecting their labor rights in a safe and respectful work environment."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "8",
                        "story": "Cemex has been running its flagship inclusive business, Patrimonio Hoy, for over a decade. It was founded to provide low-income families with access to affordable housing by providing finance, building materials, technical advice and logistical support, enabling them to build or expand their homes more quickly and efficiently. This is accomplished through a collaborative network of local company distributors and community-based promoters (mainly women trained and empowered through the program). Started in Mexico, Patrimonio Hoy has expanded across more than 100 offices across Latin America from Costa Rica to Columbia, the Dominican Republic, and Nicaragua. By 2015, more than 525,000 families had received support from the program and built homes at one-third of the cost and in one-third of the time, through microcredits exceeding US$300 million."
                    }
                },
                "Chubb Ltd": {
                    "companyName": "Chubb Ltd",
                    "nickName": "Chubb Ltd.",
                    "exchange": "NYSE",
                    "ticker": "CB",
                    "url": "https://www2.chubb.com/",
                    "Peace, Justice and Strong Institutions": {
                        "rank": "9",
                        "story": "Ace Group, a subsidiary of Chubb Ltd, and a global insurance company established a ‘Rule of Law Fund’ which provides grants to organizations and initiatives that support rule of law worldwide. The fund targets specific rule of law initiatives such as sponsoring conferences that focus on building frameworks for legal institutions in conflict zones and building pro bono efforts in developing counties."
                    }
                },
                "Citigroup Inc": {
                    "companyName": "Citigroup Inc",
                    "nickName": "Citigroup",
                    "exchange": "NYSE",
                    "ticker": "C",
                    "url": "www.citigroup.com/",
                    "Quality Education": {
                        "rank": "1",
                        "story": "Citi is building partnerships with the communities in which it operates to increase financial literacy and access to capital. For example, in Colombia, the Citi Foundation has supported Fundación Capital’s LIFT Initiative to develop an innovative tablet-based financial education system. This provides low-income individuals and their families with personalized tools that help them to build their assets, increase their financial capabilities, and support them as they transition out of poverty. The program has helped 1,000 low-income women who receive Government assistance through conditional cash transfers to become active banking clients with formal savings accounts."
                    },
                    "Gender Equality": {
                        "rank": "3",
                        "story": "Citi Microfinance, in partnership with the Overseas Private Investment Corporation (OPIC), has provided more than US$365 million to fund 40 micro nance institutions in 22 countries since 2006. This investment has resulted in loans to more than 975,000 small business and individual borrowers, nine in 10 of them women."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "7",
                        "story": "Citi has pledged to source US$2.5 billion in incremental capital towards Power Africa, a multi-stakeholder partnership that aims to double the number of people who have access to electricity throughout sub-Saharan Africa, thereby adding more than 30,000 megawatts of clean and efficient electricity generation to the grid, increasing access to 60 million new homes and businesses."
                    },
                    "Decent Work and Economic Growth": {
                        "rank": "10",
                        "story": "Citi co-founded the Better Than Cash Alliance, which is a coalition of public, private and NGO partners working to accelerate the transition to e-payment systems globally to empower people and grow emerging economies."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "4",
                        "story": "Citi partners with the C40 Cities Climate Leadership Group (a network of the world’s megacities committed to addressing climate change) to provide expert pro bono climate finance research and support to help C40 cities address the sustainable infrastructure financing and implementation needs."
                    },
                    "Climate Action": {
                        "rank": "9",
                        "story": "Citi has made a 10-year US$100 billion commitment to finance activities that reduce carbon emissions, help communities adapt to climate change and directly finance sustainable infrastructure such as green housing."
                    },
                    "All": "gold"
                },
                "Colgate-Palmolive Company": {
                    "companyName": "Colgate-Palmolive Company",
                    "nickName": "Colgate-Palmolive",
                    "exchange": "NYSE",
                    "ticker": "CL",
                    "url": "https://www.colgatepalmolive.com/",
                    "Reduced Inequalities": {
                        "rank": "1",
                        "story": "Colgate-Palmolive has adopted measures to increase access to its products in less developed areas. The company has made products more affordable with smaller sizes, re ll packs and various value options. The company takes the purchasing power of low-income consumers into account to ensure affordability of their products and also strategically balances its offerings of base and premier products depending on the region. The company has developed innovative models of distribution to reach more consumers in rural areas. For example, the company utilizes branded motorcycles to distribute large quantities of products into retail environments in Cameroon. This has led to an increase of 500% in deliveries per week and a 43% increase in sales. The company has also engaged rural shoppers by participating in the village haat, an outdoor weekly market, where many people from rural areas congregate. The company sells its personal care products here in small, affordable packages, increasing levels of personal hygiene among the thousands of residents who visit the haat regularly."
                    }
                },
                "Credit Suisse Group AG (ADR)": {
                    "companyName": "Credit Suisse Group AG (ADR)",
                    "nickName": "Credit Suisse",
                    "exchange": "NYSE",
                    "ticker": "CS",
                    "url": "https://www.credit-suisse.com",
                    "Quality Education": {
                        "rank": "10",
                        "story": "In 2008 Credit Suisse launched the first phase of the Global Education Initiative focusing on Millennium Development Goal 2 (access to and quality of education), targeting school-aged children in selected countries. Between 2008 and 2014, the Initiative developed strong partnerships, with programs reaching over 100,000 students in over 400 schools in 38 countries. More than 15,000 teachers were trained in subjects ranging from science, technology, engineering, mathematics, and information technology to child-friendly teaching methodologies. Based on this success, in 2014 Credit Suisse launched a Signature Program within the Initiative focusing on Financial Education for Girls. It aims to reach 100,000 girls and young women with interventions to prepare them for the challenges in life. The Global Citizens Program, an integral part of the Global Education Initiative, increases the impact of funding by enabling suitably qualified employees to share their expertise with local partners."
                    }
                },
                "CSX Corporation": {
                    "companyName": "CSX Corporation",
                    "nickName": "CSX Corp.",
                    "exchange": "NASDAQ",
                    "ticker": "CSX",
                    "url": "https://www.csx.com/",
                    "Zero Hunger": {
                        "rank": "5",
                        "story": "CSX, an international transport company, together with a non-profit organization helps local farmers improve food delivery services in order to increase access to fresh and healthy foods to low-income families and individuals in the United States."
                    },
                    "Good Health and Well-Being": {
                        "rank": "2",
                        "story": "CSX, a U.S. railway, and transport company have partnered with a medical school to develop a robust wellness program for its workers including 24-hour fitness, nutrition coaching, health screening, and distribution of walking/exercise monitors to tackle obesity and sleep apnea. (Research reveals that transportation workers risk shorter lifespans because their working environments often result in lack of movement and poor diet.)"
                    }
                },
                "DowDuPont Inc": {
                    "companyName": "DowDuPont Inc",
                    "nickName": "Dow Chemicals",
                    "exchange": "NYSE",
                    "ticker": "DWDP",
                    "url": "www.dow.com/",
                    "Clean Water and Sustainability": {
                        "rank": "8",
                        "story": "Dow Water and Process Solutions, a business unit of The Dow Chemical Company, introduced a wastewater management approach called minimal liquid discharge (MLD) in 2015. MLD was developed based on Dow’s experience with effective and proven water treatment technologies. It is a more cost-effective and sustainable way for companies to improve their water footprint, enabling recovery of up to 95% of liquid discharges at a fraction of the cost of solutions aiming for zero liquid discharge. With MLD, Dow showed that businesses can do what is right for both the bottom line and the environment."
                    },
                    "Partnerships for The Goals": {
                        "rank": "3",
                        "story": "Dow Chemical Company’s ambitious 2025 Sustainability Goals seek to redefine the role of business in society by helping lead the transition to a sustainable planet and society. The company is committing to leading the development of societal blueprints that facilitate the transition to a sustainable planet and society, as well as to breakthrough innovations that aim to deliver a six-fold net positive impact on sustainable development. Dow is developing six projects to demonstrate advancing a circular economy, and committing to US$1 billion of value through projects that are good for business and good for nature, as the company values ecosystem services in its business decisions. The company aims to increase confidence in the safe use of chemical technology through transparency, dialogue, unprecedented collaboration, research, and its own actions."
                    }
                },
                "Eli Lilly And Co": {
                    "companyName": "Eli Lilly And Co",
                    "nickName": "Eli Lilly",
                    "exchange": "NYSE",
                    "ticker": "LLY",
                    "url": "https://www.lilly.com/",
                    "Zero Hunger": {
                        "rank": "1",
                        "story": "Eli Lilly’s animal health division, Elanco, is working to break the cycle of hunger in 100 communities around the world by 2017. By 2015 Elanco had already begun to “break the cycle” in more than 50 communities. Elanco has been developing the tools and technologies that protect animals from infectious disease, reduce the environmental impact of livestock production, enhance animal well-being, and eradicate food-borne illness. These, in turn, enable farmers and producers to provide greater amounts of food safely and sustainably."
                    },
                    "Good Health and Well-Being": {
                        "rank": "3",
                        "story": "Eli Lilly launched the Eli Lilly Multidrug-Resistant Tuberculosis (MDR-TB) Partnership in 2003 which has become a US$170 million commitment from 2003-2016. Through the Partnership, Eli Lilly has worked with nearly 40 partners to elevate Tuberculosis on the global stage; increase awareness, prevention, diagnosis, and treatment outcomes; ensure access to quality-assured medicines, and fund early drug discovery efforts. Phase I and II accomplishments include Eli Lilly transferring manufacturing technology to seven companies to increase availability of MDR-TB medicines and improve standards of care; launch of the Eli Lilly TB Drug Discovery Initiative; provision of US$20 million in funding for TB drug discovery; strengthened capacity of more than 100,000 healthcare professionals to better recognize, diagnose, and treat MDR-TB, and to provide care and support to people with MDR-TB and their families; distribution of guidelines and toolkits to more than 45,000 hospitals and clinics; and education and establishment of partnerships with more than 350 journalists to increase and improve media coverage of TB and MDR-TB. During Phase III the Partnership is targeting four of the highest- burden MDR-TB countries: China, India, Russia and South Africa. Eli Lilly launched the Eli Lilly non-communicable diseases (NCD) Partnership in 2011 with a commitment of US$ 30 million over five years. Through the partnership, Eli Lilly is collaborating with seven leading health organizations in Brazil, India, Mexico, and South Africa—four countries with high rates of diabetes, and NCDs in general. Together the partners are leveraging their collective expertise and capabilities to develop and evaluate approaches that strengthen the early detection and timely treatment of diabetes—with the goal of sustainably improving patient and health systems outcomes while possibly lowering costs. The Partnership has no direct tie to Eli Lilly’s diabetes products, although it aims to impact health system capacity and patient outcomes, which may impact demand for its products over time."
                    },
                    "Clean Water and Sustainability": {
                        "rank": "6",
                        "story": "Eli Lilly has introduced a number of initiatives to reduce water consumption. For example, in 2014 after performing a detailed environmental assessment, Eli Lilly launched a streamlined process for manufacturing the active pharmaceutical ingredient in its insulin product in Indianapolis which reduced puri ed water use and process waste generation by 30% per unit of production, without increasing per unit solvent and urea waste volumes. In 2015, Eli Lilly implemented a similar conversion at its plant in Puerto Rico, further reducing Eli Lilly’s global environmental footprint."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "10",
                        "story": "Eli Lilly uses renewable energy to diversify its energy sources and decrease greenhouse gas emissions. It uses direct generation as well as direct and indirect purchases of renewable energy from local utilities. At five facilities worldwide, Eli Lilly generates electric power using photovoltaic arrays. A 9.95-megawatt solar system, completed in 2014, adjacent to its subsidiary in New Jersey in the United States, covers more than 40 acres and is one of the biggest of its kind for an East Coast non-utility company. The system generated 13.2 million kWh of electrical energy in 2015 and provided 31% of the power needs of he overall site."
                    },
                    "Life Below Water": {
                        "rank": "5",
                        "story": "Eli Lilly introduced a new water quality goal to reduce absolute phosphorus emissions in wastewater discharge by 15% by 2020, compared to 2014. This addresses an issue that is increasingly important to communities, regulators, and investors. The company believes that significant source reduction will require phasing out and replacing cleaning agents with non-phosphorus based alternatives. Technical teams at Eli Lilly are evaluating existing cleaning processes and will apply learnings to key sites worldwide."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "1",
                        "story": "Eli Lilly’s Bioethics Program is an independent organizational unit reporting to the chief medical officer. Amongst other activities, Eli Lilly instituted a Bioethics Framework for Human Biomedical Research in 2010 to fill the void that existed because most bioethics guidance focused on the responsibilities of clinical investigators and ethics review boards rather than industry sponsors. The Eli Lilly Bioethics Framework consists of four basic principles (respect for persons, beneficence, non-maleficence, and justice) and 13 essential elements for conducting ethical human biomedical research."
                    },
                    "All": "gold"
                },
                "Enbridge Inc": {
                    "companyName": "Enbridge Inc",
                    "nickName": "Enbridge",
                    "exchange": "NYSE",
                    "ticker": "ENB",
                    "url": "https://www.enbridge.com/",
                    "Gender Equality": {
                        "rank": "1",
                        "story": "Now in its third year, the Enbridge’s Engineering Futures program pairs Aboriginal female high school students with female role models at the company, as part of a partnership between Edmonton Catholic Schools and Enbridge’s FEMINEN (FEMales IN ENgineering) employee resource group. The underlying goal of the Engineering Futures program is to encourage more female high school students to consider science, technology, engineering and mathematics (STEM) career pathways. This mentorship helps Enbridge build and maintain a respectful and welcoming workplace, contributing to its recent selection on the annual list of Canada’s Best Diversity Employers."
                    }
                },
                "Eni SpA (ADR)": {
                    "companyName": "Eni SpA (ADR)",
                    "nickName": "Eni SpA",
                    "exchange": "NYSE",
                    "ticker": "E",
                    "url": "https://www.eni.com/",
                    "Affordable and Clean Energy": {
                        "rank": "1",
                        "story": "In Africa Eni develops energy sources not just for export but also for the supply of local populations, providing millions of more people with access to energy. For instance, Eni provides almost all the gas necessary to supply Libyan power plants (more than 5 BCM per year, covering all power needs). In Egypt, where its entire gas production already stays in the country, Eni will help to create the conditions for energy independence, thanks to the development of the new giant discovery of Zohr offshore gas. In sub-Saharan Africa, Eni has invested in power generation using associated gas, which has traditionally been flared. Eni has installed more than 1 GW of electricity capacity in 4 plants in Nigeria and Congo and transmission infrastructures which provide 20% and 60% of these countries respective electricity supply, for an investment of more than US$2 billion. This model will soon be replicated in Angola and Ghana, where Eni has signed an agreement for the development of new projects, as well as in Mozambique."
                    },
                    "Climate Action": {
                        "rank": "3",
                        "story": "In June 2015, six major oil companies (including Eni) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                    },
                    "Life Below Water": {
                        "rank": "4",
                        "story": "Eni is developing the CUBE system based on a proprietary and patented technology to respond to unforeseen oil spills at sea. CUBE was designed to be the last line of defense if a blow-out (the uncontrolled spewing of oil from a well) is not intercepted in time with standard emergency systems. A 1:4 scale model has been designed and is made for the collection and separation of gas from water and oil near the wellhead on the sea floor. The prototype, now patented due to a number of innovative solutions, has been subject to successful tank tests with a rate of up to 10,000 bbl/ day of fluid."
                    }
                },
                "FedEx Corporation": {
                    "companyName": "FedEx Corporation",
                    "nickName": "FedEx",
                    "exchange": "NYSE",
                    "ticker": "FDX",
                    "url": "https://www.fedex.com/",
                    "Good Health and Well-Being": {
                        "rank": "8",
                        "story": "FedEx collaborated with EMBARQ Mexico to develop a training program manual for Mexico City’s Metrobús drivers. The manual is an amended version of the FedEx Safety First program and is now being replicated in other Mexican cities. Elsewhere, EMBARQ Brazil is developing a pocket safety manual for drivers that will draw on both the FedEx Safety First program and the EMBARQ Mexico training manual."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "2",
                        "story": "FedEx, a global logistics company, embarkedon a project with EMBARQ (a think tank) to identify sustainable public transport solutions in cities in Mexico, Brazil, and India. The three-year project reached out to over 1,600 transport officials and drivers, contributing to a reduction of 20,000 tons of carbon dioxide emissions. In addition, the program helped urban transport operators provide enhanced and more efficient services."
                    }
                },
                "Fluor Corporation (NEW)": {
                    "companyName": "Fluor Corporation (NEW)",
                    "nickName": "Fluor Corp.",
                    "exchange": "NYSE",
                    "ticker": "FLR",
                    "url": "www.fluor.com/",
                    "Quality Education": {
                        "rank": "8",
                        "story": "Fluor, an international construction firm, runs a vocational training school for unemployed and disadvantaged people in South Africa. Since its inception almost 35 years ago, more than 30,000 people have been trained in marketable trade skills and have secured employment as fitters, welders, electricians, pipe fitters, and other building trades. The training program provides Fluor with access o a diverse talent pipeline."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "8",
                        "story": "Fluor, a global engineering construction company, supports external anti-corruption efforts through collective action. Fluor will not tolerate bribery of any form even if it will lose business or encounter delays because of its refusal to do so. It is a founding member of the World Economic Forum’s Partnering Against Corruption Initiative (PACI), and the Chairman and CEO of Fluor chairs PACI Vanguard which is a community of global CEOs committed to advocating for a stronger anti-corruption agenda. The Chairman and CEO of Fluor has also been the co-chair of the B20 Task Force on Improving Transparency and Anti-Corruption since inception in 2011, and he chairs the workstream on collective action. Fluor has collaborated with several industry-focused initiatives to develop codes of conduct for small-medium enterprises in the engineering and construction industry, as well as training and other projects to improve ethics and compliance in its industry throughout the world."
                    }
                },
                "Ford Motor Company": {
                    "companyName": "Ford Motor Company",
                    "nickName": "Ford Motors",
                    "exchange": "NYSE",
                    "ticker": "F",
                    "url": "https://www.ford.com/",
                    "Clean Water and Sustainability": {
                        "rank": "2",
                        "story": "Ford reduced its total global water use by 62% between 2000 and 2014, or more than 10 billion gallons (equivalent to the water used for 1 billion ve-minute showers). It also exceeded its global goal to reduce water use per vehicle by 30%, two years ahead of its 2015 target. It accomplished this by cutting the water it uses in everything from cooling towers, to washing parts, to paint operations. Ford has invested in numerous water- reduction technologies and process improvements. These include membrane biological reactors and reverse-osmosis processes to recycle water from on-site wastewater treatment plants in more arid regions, as well as Minimum Quantity Lubrication which uses a ‘dry-machining’ process to lubricate cutting tools with a very small amount of oil (rather than the conventional “wet-machining” process that required large amounts of metal-working fluids and water to cool and lubricate the tools)."
                    },
                    "Decent Work and Economic Growth": {
                        "rank": "5",
                        "story": "Ford has implemented a training program to promotes responsible working conditions in its supply chain. The program is based on one-day interactive workshops involving multiple suppliers and is targeted at human resources, health and safety, and legal managers within supplier companies. Each participant is expected to ‘cascade’ relevant training materials to personnel within their own companies and to their own direct suppliers within four months of the workshop. This resulted in the formation of the Automotive Industry Action Group (AIAG), through which car manufacturers from North America, Europe, and Asia have developed common guidance statements on working conditions. The company estimates that its training activity (carried out both unilaterally and in conjunction with the AIAG) has reached over 2,900 supplier representatives – and been ‘cascaded’ to around 25,000 supplier managers, 485,000 workers, and 100,000 sub-tier supplier companies."
                    },
                    "Reduced Inequalities": {
                        "rank": "6",
                        "story": "Ford launched its supplier diversity development program in 1978 with the goals of supporting minority and women-owned businesses, creating business opportunities for diverse suppliers to grow into pro table enterprises, and further strengthening the Ford supplier network to reflect the company’s workforce and customer base. Ford’s diverse suppliers play an important role in the company’s revitalized and expanding portfolio of high-quality, safe, fuel-efficient products equipped with smart technologies. In 2015, Ford purchased goods and services worth: US$8.2 billion from minority-owned suppliers, US$1.1 billion from veteran-owned companies and US$2.3 billion from women-owned businesses."
                    }
                },
                "General Electric Company": {
                    "companyName": "General Electric Company",
                    "nickName": "General Electric",
                    "exchange": "NYSE",
                    "ticker": "GE",
                    "url": "https://www.ge.com/",
                    "Good Health and Well-Being": {
                        "rank": "6",
                        "story": "General Electric’s healthcare business has incubated and spun off a start-up company in India for the first time. GenWorks, launched in February 2015 and headed by former GE Healthcare executives who own a majority stake in the company, is attempting to create an ambitious healthcare distribution network for Tier-2 and Tier-3 towns and cities as part of a push to solve some of the biggest healthcare challenges facing the country. GE Healthcare, which holds a 26% stake in the entity, incubated the idea of GenWorks a little over a year ago inside the company. The company was looking at scaling up its distribution in India, and this startup facilitated the creation of a distribution network far beyond traditional boundaries, helping to solve the challenge of access and affordability of healthcare for the bottom half of India’s population."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "2",
                        "story": "General Electric held a series of meetings with NGOs, business leaders, and government officials with respect to reforms in a Southeast Asian country, with a view to addressing issues regarding fair and open procurement, leadership training, the legal environment for responsible investment, and the rule of law. In addition, the company’s related foundation has sponsored the provision of legal services by the Senior International Lawyers Program to legal institutions in this country and the participation of government officials in international training on infrastructure development and competitiveness at the Lee Kuan Yew School of Public Policy."
                    }
                },
                "General Motors Company": {
                    "companyName": "General Motors Company",
                    "nickName": "General Motors",
                    "exchange": "NYSE",
                    "ticker": "GM",
                    "url": "https://www.gm.com/",
                    "Reduced Inequalities": {
                        "rank": "3",
                        "story": "General Motors (GM) has 12 Employee Resource Groups which provide a forum for employees to share common concerns and experiences, gain professional development support and engage in local communities. These Groups include the African Ancestry Network, Asian Indian Affinity Group, Chinese Employee Resource Group, GM Hispanic Initiative Team, Native American Cultural Network, and People With Disabilities. All Employee Resource Groups work towards making GM a workplace of choice, and they provide insights that help GM better understand diverse and emerging consumer markets. Each Employee Resource Group has a business plan tied to talent acquisition, talent development, community outreach and business support."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "3",
                        "story": "General Motors launched Maven, a new brand and business model dedicated to car sharing. Maven provides seamless and intuitive mobility access and options in addition to and as an alternative to vehicle ownership. Services are customized to regional customer needs and include city and residential programs. Maven City offers car sharing to anyone with the Maven smartphone app who lives in or visits a city where Maven vehicles are available. Maven+ is the residential offering, open to residents who live in one of the buildings with which Maven has partnered. Maven eliminates the friction points involved with car ownership in city environments. Pricing is simple and transparent and includes insurance and fuel."
                    }
                },
                "GlaxoSmithKline plc (ADR)": {
                    "companyName": "GlaxoSmithKline plc (ADR)",
                    "nickName": "GlaxoSmithKline",
                    "exchange": "NYSE",
                    "ticker": "GSK",
                    "url": "https://www.gsk.com/",
                    "Responsible Consumption and Production": {
                        "rank": "1",
                        "story": "GSK works closely with suppliers to investigate ways to reduce their collective environmental impact (around 40% of GSK’s carbon footprint comes from its supply chain). In 2014, GSK collected carbon, water, and waste data from over 200 of its largest materials suppliers, covering over £1 billion of its spending on raw materials used in manufacturing and research and development. More than 500 suppliers have now been asked to share practical ideas about improving energy efficiency and reducing other environmental impacts. This is done through the GSK Supplier Exchange – a private online forum where suppliers can collaborate with each other and GSK to share practical ideas about improving resource usage, saving water and increasing energy efficiency."
                    }
                },
                "Gold Fields Limited (ADR)": {
                    "companyName": "Gold Fields Limited (ADR)",
                    "nickName": "Gold Fields",
                    "exchange": "NYSE",
                    "ticker": "GFI",
                    "url": "https://www.goldfields.com/",
                    "Clean Water and Sustainability": {
                        "rank": "4",
                        "story": "In 2014, Gold Fields began a four-year program to improve water quality and access for communities in the direct area of influence of Gold Fields’ Cerro Corona mine in Peru and to promote, in partnership with government, remediation of legacy mining activities (not associated with the Company). The program involves building new potable water systems through the construction of a water pipeline from a well at Cerro Corona, identifying and repairing water leaks in the existing water infrastructure and remediation of environmental liabilities that are contaminating a local stream. As a result of the program,almost90%ofhouseholdsinHualgayoc now have access to sufficient clean running water. Apart from strengthening relationships between Gold Fields, the regulator, and host communities, the remediation of legacy mining sites near Cerro Corona will significantly improve the quality of the water in the El Tingo River, on which communities depend for various uses. This strengthens the company’s social license to operate in a region in which other mining companies have experienced water-related conflict with local communities."
                    }
                },
                "Goldcorp Inc. (USA)": {
                    "companyName": "Goldcorp Inc. (USA)",
                    "nickName": "Goldcorp Inc.",
                    "exchange": "NYSE",
                    "ticker": "GG",
                    "url": "https://www.goldcorp.com/",
                    "Responsible Consumption and Production": {
                        "rank": "3",
                        "story": "Goldcorp’s Tailings Stewardship Strategy ensures best practices in tailings storage facilities and helps Goldcorp retain a leadership position in mine waste management. All the company’s operating sites underwent tailings risk assessments in 2015. These programs serve to strengthen the company’s social license to operate by establishing standards and consistency and enhancing community acceptance. Tailings stewardship ensures planning, design, construction, operation and closure of tailings storage and water retention facilities will be carried out in a manner such that: structures are physically stable under all anticipated conditions; solids and water are managed within designated areas; facilities meet or exceed regulatory or standard engineering guidelines; facilities are chemically stable so that the quality of any seepage or surface runoff does not endanger human health or the environment; and facilities can be closed in a manner that is compatible with the surrounding land use, and that will have a manageable impact on the environment."
                    },
                    "Life on Land": {
                        "rank": "3",
                        "story": "GoldCorp’s goal is to develop, operate and close its mining properties in a sustainable manner. Biodiversity factors into plans prior to mine construction, through operations and after closure. Every operation has an environmental closure plan in place, which includes reclamation strategies that will leave healthy, thriving ecosystems with productive, useful land for local communities. In 2015, El Sauzal was the first mine to demonstrate it's successful decommissioning in accordance with the International Cyanide Management Code."
                    }
                },
                "Goldman Sachs Group Inc": {
                    "companyName": "Goldman Sachs Group Inc",
                    "nickName": "Goldman Sachs",
                    "exchange": "NYSE",
                    "ticker": "GS",
                    "url": "www.goldmansachs.com/",
                    "Gender Equality": {
                        "rank": "4",
                        "story": "Goldman Sachs Group founded the ‘10,000 Women’ program in 2008 which aims to provide educational opportunities in business and management to women, mostly from developing countries, through the creation of partnerships with women’s development organizations. Courses include marketing, accounting, and strategic planning. The company has set up partnerships to help women in 14 countries. An independent report of the program in 2014 found that within 18 months of graduating 69% of participants had increased their revenues, 58% had been able to create new jobs at their businesses, and 90% of participants were involved in mentoring other women."
                    }
                },
                "Hewlett Packard Enterprise Co": {
                    "companyName": "Hewlett Packard Enterprise Co",
                    "nickName": "Hewlett Packard",
                    "exchange": "NYSE",
                    "ticker": "HPE",
                    "url": "www.hp.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "4",
                        "story": "Hewlett-Packard (HP) expanded its supply chain requirements in 2014, taking major steps toward preventing exploitative labor practices and forced labor. HP was the first IT company to require the direct employment of foreign migrant workers in the company’s supply chain through the HP Supply Chain Foreign Migrant Worker Standard. By insisting on direct employment, the company can better monitor and prevent issues commonly associated with migrant workers, such as retention of passports or personal documentation and worker paid recruitment fees."
                    },
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "1",
                        "story": "Hewlett-Packard announced its new Blended Reality ecosystem in 2014, including the innovative new personal computing system called Sprout and Multi Jet Fusion, a new commercial 3D printer technology. This breakthrough has the potential to accelerate the adoption of 3D design and hardware innovation, which could contribute to a digital transformation of manufacturing and help to enable the circular economy. This disruptive technology may improve materials efficiency by streamlining the prototyping process, improving the economics of short-run manufacturing, and avoiding waste associated with mass production. It also enables superior designs that are feasible only using “additive manufacturing” techniques. By making it possible to produce individual replacement parts locally, rapidly, and inexpensively, 3D printing can extend the lifespan of some products. 3D printing may also increase the recyclability and value of product materials at the end of life by reducing the number of material types used in manufacturing."
                    },
                    "Reduced Inequalities": {
                        "rank": "5",
                        "story": "Hewlett-Packard (HP) has achieved a greater than 85% (or Level 2) level of compliance with South Africa’s Department of Trade and Industry’s Broad-Based Black Economic Empowerment (BBBEE) Codes of Good Practice. It has established the HP Business Institute which supports the development of small and medium enterprises (SME) in the IT sector in South Africa. In addition, the HP Business Institute facilitates courses to develop the skills of existing SME employees and recent graduates pursuing careers in the IT sector, as well as training of existing employees placed in short-term skills programs. HP is also actively recruiting Historically Disadvantaged South Africans so that the composition of HP South Africa staff resembles the demographics of the country, offering capacity building in the form of IT education within the greater community and ensuring that a significant amount of procurement is from BBBEE companies."
                    }
                },
                "HSBC Holdings plc (ADR)": {
                    "companyName": "HSBC Holdings plc (ADR)",
                    "nickName": "HSBC",
                    "exchange": "NYSE",
                    "ticker": "HSBC",
                    "url": "https://www.us.hsbc.com",
                    "Quality Education": {
                        "rank": "9",
                        "story": "In 2008 Credit Suisse launched the first phase of the Global Education Initiative focusing on Millennium Development Goal 2 (access to and quality of education), targeting school-aged children in selected countries. Between 2008 and 2014, the Initiative developed strong partnerships, with programs reaching over 100,000 students in over 400 schools in 38 countries. More than 15,000 teachers were trained in subjects ranging from science, technology, engineering, mathematics, and information technology to child-friendly teaching methodologies. Based on this success, in 2014 Credit Suisse launched a Signature Program within the Initiative focusing on Financial Education for Girls. It aims to reach 100,000 girls and young women with interventions to prepare them for the challenges in life. The Global Citizens Program, an integral part of the Global Education Initiative, increases the impact of funding by enabling suitably qualified employees to share their expertie with local partners."
                    },
                    "Climate Action": {
                        "rank": "6",
                        "story": "HSBC is one of a number of financial institutions that is playing an important role in shaping the fast- developing green bond market. Also, for more than 10 years, HSBC has been working with its business customers to help them understand and manage their environmental and social impact with a focus on certain sectors and themes. HSBC assesses and supports customers using its policies which it regularly reviews and refines. HSBC’s Energy Sector Policy severely restricts the bank’s support for coal-fired power plants, while recognizing that the shift to a low carbon economy will take time and that fossil fuels will be an important part of the global energy mix for the foreseeable future."
                    },
                    "Life on Land": {
                        "rank": "5",
                        "story": "In 2004, HSBC was one of the first banks to introduce a Forest Land and Forest Products Sector Policy covering environmental, community and climate issues. In 2014, HSBC issued revised Forestry and Agricultural Commodities policies and started to engage its customers in these sectors, offering advice on how they might achieve the new deadlines set by the bank to achieve independent certification of their operations. As a result, HSBC’s customers in Malaysia, Indonesia, mainland China, Taiwan, South Korea, Thailand, Turkey and Mexico decided to have their operations certified. One example is an Indonesian palm oil processing, refining, and export company, where the management sought expert advice from third parties to understand more about certification from the Roundtable on Sustainable Palm Oil (RSPO), which they found was less complex than they had imagined. Two units of the company obtained RSPO certification in June 2014. In February 2015, HSBC was recognized as the leader in the Forest500 ranking of 150 investors’ policies on the sustainability of forest commodity supply chains. HSBC also offers a discounted prepayment export finance product for trade flows of certified sustainable palm oil. The product launched in Singapore and Indonesia in 2014 and in Malaysia in early 2015.The first deal completed on this structured, bespoke financing was for a major palm oil exporter in 2014."
                    },
                    "Partnerships for The Goals": {
                        "rank": "5",
                        "story": "FedEx, a global logistics company, embarked on a project with EMBARQ (a think tank) to identify sustainable public transport solutions in cities in Mexico, Brazil, and India. The three-year project reached out to over 1,600 transport officials and drivers, contributing to a reduction of 20,000 tons of carbon dioxide emissions. In addition, the program helped urban transport operators provide enhanced and more efficient services."
                    },
                    "All": "bronze"
                },
                "Intel Corporation": {
                    "companyName": "Intel Corporation",
                    "nickName": "Intel",
                    "exchange": "NASDAQ",
                    "ticker": "INTC",
                    "url": "https://www.intel.com/",
                    "Clean Water and Sustainability": {
                        "rank": "3",
                        "story": "Intel has invested more than US$220 million in water conservation programs at its global facilities since 1998, saving over 48 billion gallons of water. Intel has been able to decrease the amount of water required to create the ultra-pure water used to clean silicon wafers during fabrication. After it uses ultra-pure water to clean wafers, the water is suitable for industrial purposes, irrigation, and many other needs. Intel’s factories are equipped with complex rinse water collection systems, with separate drains for collecting lightly contaminated wastewater for reuse. With this reuse strategy, the company harvests as much water from its manufacturing processes as possible and directs it to equipment such as cooling towers and scrubbers. In addition, at some locations, Intel has arrangements to take back grey water from local municipal water treatment operations for use at its campuses. In 2014, Intel internally recycled approximately 3.9 billion gallons of water, equivalent to about 47% of its total water withdrawals for the year."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "5",
                        "story": "Intel is addressing the privacy, security, and freedom of expression impacts of information and communications technology through accountability, public policy, collaboration, and education. The company’s Privacy by Design and Secure Development Life-cycle processes define actions, deliverables, and checkpoints designed to integrate security and privacy into its products and services to meet product and market expectations. Its development processes include ananalysis of how a product protects against unauthorized access, use, destruction, modification, or disclosure of personal information. As the products and services that Intel offers continue to become more diverse, it tracks and evaluates concerns about how technology products can potentially impact privacy, data security, and human rights—including the possibility that its products may be misused to limit the freedom of expression and human rights of individuals. Intel also advocates for global policies and standards to protect data privacy and security."
                    }
                },
                "Interface, Inc.": {
                    "companyName": "Interface, Inc.",
                    "nickName": "Interface Inc.",
                    "exchange": "NASDAQ",
                    "ticker": "TILE",
                    "url": "www.interface.com/",
                    "Life Below Water": {
                        "rank": "2",
                        "story": "Interface, a carpet tile manufacturer, has a carpet tile collection called Net Effect that honors the ocean not only in its aesthetic references but also in a unique and tangible way through a project called Net-WorksTM. Net-Works provides a source of income for small fishing villages in the Philippines while cleaning up their beaches and waters of discarded fishing nets that threaten their livelihood and the very precious double barrier reef off their shore. Discarded fishing nets are collected and sold to Interface’s trusted yarn supplier and partner, Aqua l. Since 2011, Aqua l has been re-purposing waste nylon from discarded fishing nets and other sources, including yarn reclaimed through its ReEntry® program, to provide recycled content nylon for Interface carpet tile."
                    }
                },
                "Tata Motors": {
                    "companyName": "Tata Motors",
                    "nickName": "Jaguar Land Rover",
                    "exchange": "NYSE",
                    "ticker": "TTM",
                    "url": "www.jaguarlandrover.com/",
                    "Good Health and Well-Being": {
                        "rank": "7",
                        "story": "JaguarLandRover’sAdvancedResearch Centre is working on a suite of groundbreaking new technologies that aim to prevent future road accidents. In 2014, it began introducing autonomous emergency braking systems across its whole model range. Using stereo cameras located above the rear-view mirror, the system helps to identify an imminent risk of colliding with another vehicle – avoiding or reducing the severity of the impact. Research projects include 360o Urban Windscreen which uses transparent roof pillars (and cameras outside the vehicle) to give the driver a 360o view outside the vehicle so that pedestrians, cyclists, and other vehicles are visible, even in blind spots."
                    },
                    "Quality Education": {
                        "rank": "6",
                        "story": "Jaguar Land Rover’s ‘InspiringTomorrow’s Engineers’ program promotes learning and engagement in STEM subjects in collaboration with schools and colleges to inspire young people to consider engineering and manufacturing careers. Over 2.5 million young people have participated in the program which comprises three main elements: \\n(i) School STEM Team Challenges (including Rover 4x4 in Schools, Jaguar Maths in Motion and Jaguar Primary School Challenge) which bring science and technology subjects to life, providing pupils in 11 countries with hands-on projects that enable them to explore different aspects of the automotive industry in a stimulating and exciting way.  In addition to raising awareness about engineering and automotive technologies, the projects also help young people develop communication, team-work, project management and ICT skills.\\n(ii) EducationBusinessPartnershipCentreswhich manage school visits and work placements at the company’s UK sites.\\n(iii) Careersoutreachactivitieswherethecompany engages with young people, teachers and parents outside its plants to help inform career choices."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "9",
                        "story": "In 2014, Jaguar Land Rover opened a new Engine Manufacturing Centre in the UK with a roof-mounted solar array which at the time of construction was the largest privately owned array in Britain. The building has 22,622 panels (6.2MWp) which are designed to supply 30% of the site’s energy needs (equivalent to the energy required to power 1,600 homes), thereby reducing the plant’s CO2 footprint by over 2,400 tonnes per year. Jaguar Land Rover is planning to invest £36 million over the three years to 2017 in improving energy performance through an integrated approach of efficiency, process change and renewable energy."
                    },
                    "Life on Land": {
                        "rank": "10",
                        "story": "Jaguar Land Rover is developing ecology strategies for all its sites, recognizing that early consideration of biodiversity allows for opportunities to effectively manage and, where possible, enhance biodiversity. For example, it is creating an ecological corridor for wildlife across the bottom of its Engine Manufacturing Centre site in the UK to encourage the natural movement of species from one side of the site to the other. It is also installing bat boxes, habitat piles, dead wood stumps and insect houses to encourage small mammals, invertebrates, amphibians, bats and birds to the site."
                    },
                    "All": "bronze"
                },
                "Johnson and Johnson": {
                    "companyName": "Johnson and Johnson",
                    "nickName": "Johnson and Johnson",
                    "exchange": "NYSE",
                    "ticker": "JNJ",
                    "url": "https://www.jnj.com/",
                    "Good Health and Well-Being": {
                        "rank": "4",
                        "story": "Johnson and Johnson launched Janssen Global Public Health (GPH) in early 2014 to unify the company’s commitment to addressing some of the world’s most critical health issues. For instance, Janssen is partnering with Stop TB Partnership’s Global Drug Facility and the U.S. Agency for International Development to facilitate access to its multi-drug resistant tuberculosis compound better, SIRTURO® (bedaquiline), for patients in more than 130 low and middle income countries, and to collaborate for continued evaluation of multi-drug resistant TB treatment regimens with SIRTURO®. In addition, Janssen GPH is collaborating with Harvard Medical School to support research, policy, and advocacy to address pediatric and adult drug-resistant TB treatment. To help treat and prevent HIV in at-risk individuals, Janssen GPH expanded its collaboration with the International Partnership for Microbicides to include worldwide development and commercialization of dapivirine to prevent sexual transmission of HIV in women, strengthened country-level capacity, knowledge and action around the needs of HIV treatment-experienced children through the collaborative New Horizons Advancing Pediatric HIV Care initiative, and reduced the cost of its HIV medicine PREZISTA® (darunavir), including pediatric formulations, by almost 20% for sub- Saharan Africa and least-developed countries."
                    },
                    "Gender Equality": {
                        "rank": "6",
                        "story": "Johnson and Johnson is tracking health education programs in targeted communities around that world that focus on increasing individual and public understanding of basic health information. One example is Mitra, a mobile health partnership with the Mobile Alliance for Maternal Action, USAID, the UN Foundation, BabyCenter, Johnson and Johnson and ARMMAN, a Mumbai-based NGO. The program sends preventive care voice messages to pregnant women and new mothers twice a week. The messages go directly to their mobile phones in their chosen language and a preferred time slot corresponding to the stage of their pregnancy or the developmental stage of their child. The program plans to reach up to one million new and expectant mothers, promoting positive health behaviors in low-income urban communities across India. This program helps the company fulfill its Healthy Future 2015 enterprise goal while building meaningful connections with new consumers."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "8",
                        "story": "Sterilmed, a Johnson and Johnson member company, provides a service to reprocess Single Use Devices that have previously been used on a patient and are typically disposed of as medical waste. Sterilmed is an FDA-registered medical device manager, providing an affordable solution for hospitals faced with the challenge of reducing costs without compromising patient care. The company helps customers significantly reduce their environmental footprint by eliminating medical waste that would otherwise end up in land fills or incinerators. Reprocessing helps divert millions of points of medical waste from landfills and incinerators each year."
                    },
                    "Life Below Water": {
                        "rank": "8",
                        "story": "Johnson and Johnson has developed a Global Aquatic Ingredient AssessmentTM (GAIA) protocol to better understand how its products interact with water environments. GAIA analyzes the impact an ingredient might have in an aquatic environment and the fish and plant life that live there. Ingredients are evaluated against the GAIA criteria and given a score. By calculating how much of an ingredient is used in a product and the score of that ingredient, a product can be given its own score. For products with lower scores, the company works to improve the formulation to reduce any potential impact on aquatic life."
                    },
                    "Partnerships for The Goals": {
                        "rank": "7",
                        "story": "In 2015, Johnson and Johnson announced an extended agreement with the Yale Open Data Access Project to provide access to its portfolio of medical devices products, setting new industry standards by being the first company to do so. Johnson and Johnson is committed to enhanced transparency and increased engagement with stakeholders."
                    },
                    "All": "silver"
                },
                "Keurig Green Mountain Inc": {
                    "companyName": "Keurig Green Mountain Inc",
                    "nickName": "Keurig Green Mountain",
                    "exchange": "NASDAQ",
                    "ticker": "GMCR",
                    "url": "www.keuriggreenmountain.com/",
                    "Life Below Water": {
                        "rank": "3",
                        "story": "Employees at a Keurig Green Mountain found a new use for burlap bags in which green coffee beans are transported. These bags used to go to land ll, and now they are used as ground cover to reduce runoff into the nearby coastal inlet. The bags are also used in community gardens for sheet mulching and erosion control. In a nearby wetland restoration project, the sturdy bags were spread around to stop the growth of invasive species."
                    }
                },
                "Mylan NV": {
                    "companyName": "Mylan NV",
                    "nickName": "Mylan",
                    "exchange": "NASDAQ",
                    "ticker": "MYL",
                    "url": "http://www.mylan.com/",
                    "Quality Education": {
                        "rank": "7",
                        "story": "In 2014, Mylan signed a multi-year strategic alliance agreement with Walt Disney Parks and Resorts to help increase awareness and education around anaphylaxis, following an increase in life-threatening (severe) allergic reactions in recent years. The agreement includes updated maps in Disney’s domestic theme parks and on its cruise ships, as well as updated signage in the parks that highlight locations with the company’s EpiPen® and EpiPen Jr® Auto-Injectors. Over time, the company plans to introduce a variety of supplemental educational resources. The company also created a Get Schooled in AnaphylaxisTM educational initiative in 2012 to help those in school settings know how to respond when anaphylaxis occurs. Additionally, more than 64,000 schools have participated in the EpiPen4Schools® program which provides free EpiPen® Auto-Injectors to U.S. schools."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "8",
                        "story": "Mylan uses natural gas, biofuel briquettes and other alternative fuels in many of its manufacturing facilities. Whenever possible, it sends waste from laboratories and manufacturing activities to waste-to-energy facilities or cement kilns that convert it into energy or steam used for heating. Some of Mylan’s sites in India purchase electricity from third-party suppliers that utilize renewable energy, such as solar and wind power. In addition, one of the company’s API plants generates steam from a mixture of coal and rice husks, producing up to 60% of its electricity. Mylan reports that four of its API manufacturing sites were the first in India to have met an internationally recognized benchmark, ISO 50001, for superior performance in managing energy responsibly and its other sites are introducing similar systems so that they too may receive this certification."
                    },
                    "Sustainable Cities and Communities": {
                        "rank": "10",
                        "story": "Mylan’s leaders decided voluntarily to forge ahead and reduce Volatile Organic Compound (VOC) emissions coming from the company’s Morgantown, West Virginia, plant while U.S. Environmental Protection Agency officials debated in 2010 whether to impose more stringent air-quality standards. Mylan installed regenerative thermal oxidizer technology that year which between 2011 and 2014 eliminated more than 1,000,000 pounds of solvent emissions from the atmosphere. As a result, families, and communities in and around the area are breathing easier. The county’s 8-hour ozone level average from 2011-2013 was 12% lower than its 2005-2007average."
                    },
                    "Peace, Justice and Strong Institutions": {
                        "rank": "4",
                        "story": "When Mylan’s business went global in 2007, it learned that many manufacturers outside of the United States which were supplying to the United States market were seldom or never inspected by the U.S. Food and Drug Administration. Mylan played a crucial role in shaping landmark U.S. legislation called the Food and Drug Administration Safety and Innovation Act. The law expanded the FDA’s authority and strengthened its ability to safeguard and advance public health. Mylan believes that drug quality around the world is being enhanced by its persistent and creative approach to finding a legislative solution to restore a level playing field in the U.S. and increase FDA inspection rates around the world."
                    },
                    "Partnerships for The Goals": {
                        "rank": "8",
                        "story": "Mylan’s role in stemming the tide of HIV/AIDS goes beyond supplying high quality, affordable anti-retrovirals. The company also works closely with AIDS organizations to shape market policy and with local Governments to determine how to implement HIV treatment guidelines swiftly. Mylan reports that it is the only generic pharmaceutical company working with the Global Fund to Fight AIDS, Tuberculosis, and Malaria on policy matters. As the 2015/17 alternate board member of its Private Sector Delegation, Mylan is advising the Global Fund on how to make sure the impact of its investments is sustainable. In addition, the company’s global scope combined with its deep knowledge of local markets enables it to provide its international AIDS partners with valuable feedback on how their global goals can work in individual countries. Mylan partners with a wide variety of organizations including the Clinton Health Access Initiative; UNITAID; UNICEF; the Bill and Melinda Gates Foundation; Global Fund to Fight Aids, Tuberculosis, and Malaria; the World Health Organization; and the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR)."
                    },
                    "All": "silver"
                },
                "Nike Inc": {
                    "companyName": "Nike Inc",
                    "nickName": "Nike",
                    "exchange": "NYSE",
                    "ticker": "NKE",
                    "url": "https://www.nike.com/",
                    "Sustainable Cities and Communities": {
                        "rank": "9",
                        "story": "Nike has implemented a global property protection program to reduce the impact of weather-related events on physical assets. The program covers facility location and designing and building key facilities to a very high level of property protection."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "2",
                        "story": "Nike has developed a Considered Design line which aims to minimize waste through the design process and uses environmentally preferred materials for its shoes (e.g., knit shoe design)."
                    }
                },
                "Novo Nordisk A/S (ADR)": {
                    "companyName": "Novo Nordisk A/S (ADR)",
                    "nickName": "Novo Nordisk",
                    "exchange": "NYSE",
                    "ticker": "NVO",
                    "url": "www.novonordisk-us.com/",
                    "Sustainable Cities and Communities": {
                        "rank": "5",
                        "story": "In 2014, Novo Nordisk AS launched Cities Changing Diabetes – a cross-disciplinary and cross-sector partnership program to identify and address the root causes of the rise of type 2 diabetes in urban areas, and to facilitate implementation of integrated and sustainable solutions in response to the local diabetes challenge. Today, 65% of 415 million people with diabetes live in cities, amounting to nearly 270 million people. By 2040, this is projected to rise to 74%. Based on these facts Novo Nordisk believes that cities are important focal points for developing solutions to tackling diabetes."
                    }
                },
                "PepsiCo, Inc.": {
                    "companyName": "PepsiCo, Inc.",
                    "nickName": "PepsiCo",
                    "exchange": "NYSE",
                    "ticker": "PEP",
                    "url": "http://www.pepsico.com/",
                    "Affordable and Clean Energy": {
                        "rank": "5",
                        "story": "PepsiCo owns one of the largest fleets of all-electric delivery trucks, with 280 vehicles. The company also has over 200 compressed natural gas (CNG) vehicles, representing over 20% of their fleet. The company saved over US$3 million in 2014, while also reducing emissions by more than 20%as compared to conventional diesel engines. The company has also purchased new vehicles that double the fuel economy as compared to traditional delivery trucks. Since 2010, the company’s fleet programs have delivered a combined greenhouse gas reduction of 55,000 metric tonnes, while reducing fuel use by nearly 24%."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "4",
                        "story": "PepsiCo has researched ways in which to package and deliver products to minimize its environmental impact and reduce costs. Through these initiatives, the company has eliminated nearly 110 million pounds of packaging material since 2013, which has reduced its packaging costs by more than $55 million. The company is the only major consumer packaged goods company to incorporate post-consumer recycled content into its plastic, which it has been doing since 2004. The company has also extensively researched ways in which to reduce packaging size and has reduced the seal size on many of its products, resulting in the elimination of over 11 million pounds of flexible film packaging in 2013, equivalent to 6.5 billion 1-ounce-single-serve bags."
                    }
                },
                "Pfizer Inc.": {
                    "companyName": "Pfizer Inc.",
                    "nickName": "Pfizer Inc.",
                    "exchange": "NYSE",
                    "ticker": "PFE",
                    "url": "www.pfizer.com/",
                    "Good Health and Well-Being": {
                        "rank": "9",
                        "story": "In 2013, the Pfizer Foundation established a Health Delivery and Social Innovation portfolio to help catalyze and scale potential high impact innovations that aim to improve health for underserved populations in low and middle-income countries. Investments and grants are made with the goal of generating social impact and growing sustainable organizations that support healthcare delivery. An example of this is the StartHealth Program, an initiative by Unitus® Seed Fund, in partnership with Pfizer Inc. and the Pfizer Foundation, Narayana Health, Manipal hospitals, and PATH, targeted towards identifying, mentoring and investing in early-stage healthcare technology startups in India and Southeast Asia. The program identifies promising technologies and combines philanthropic grant funding, for-pro t seed investing and technical assistance to accelerate the pace of development of health-tech startups and help improve health care systems for patients at the base of the pyramid. Pfizer Inc.’sGlobalHealthFellowprogramplaces Pfizer employees in individual, three- to six-month assignments with international development organizations to work together to bring about meaningful and systematic improvements in health service delivery. Fellows transfer their biopharmaceutical and business expertise in ways that promote access, quality and efficiency of health care. Fellows work hand-in-hand with community- based partners to help improve healthcare systems while gaining new perspectives on global health challenges and how the public and private sector can work together to address them. To date, 340,000 hours of skills-based volunteering service have been contributed, with a value of over US$50 million. Assignments have included Pfizer Fellows working with the International AIDS Vaccine Institute and local research centers in South Africa, Kenya and Uganda to strengthen capacity to conduct and monitor AIDS vaccine trials to meet international standards and expand trial activities."
                    }
                },
                "Koninklijke Phillips NV (ADR)": {
                    "companyName": "Koninklijke Phillips NV (ADR)",
                    "nickName": "Phillips",
                    "exchange": "NYSE",
                    "ticker": "PHG",
                    "url": "https://www.philips.com/",
                    "Zero Hunger": {
                        "rank": "3",
                        "story": "Royal Philips City Farming Program works with universities and partners to develop indoor commercial farms using LED grow lights. Farming by this method can result in 20-25 harvests a year, with up to 85% less energy usage. Indoor growing systems based on LED lighting can maximize plant photosynthesis while minimizing energy use, for delicious and nutritious vegetables grown sustainably. Growing crops vertically makes it possible to grow more plants per acre than would be possible with an old farm, enabling more harvests per year, with little waste produced, less agricultural run-off and minimal greenhouse gasses because the food is grown where it is consumed."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "2",
                        "story": "Royal Philips has developed Community Light Centers, which enable social and economic development after dark for communities off the grid throughout Africa. These centers measure 1000 meters squared, and obtain their energy through the use of solar-powered LED lighting technology made by the company. By the end of 2016, the company hopes to open 100 community light centers throughout Africa, along with 30in Latin America, improving living standards and providing surplus energy to enable small business creation. Furthermore, the company has developed LED Lantern Solutions to prevent women and children from inhaling smoke from indoor kerosene lamps and wood fires. The annual costs for these lanterns is a fraction of the average and provide 10 times longer lasting energy."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "7",
                        "story": "Royal Philips has created a Circular Economy, and Green Operations Program focused on creating sustainable consumption and production patterns. In 2014, the company reused 81% of its industrial waste as a result of recycling. The company recognizes the importance of reusing materials and has also established a Refurbished Systems Program, which results in reduced emissions of CO2, fewer raw materials used, and less energy consumed."
                    }
                },
                "Royal Caribbean Cruises Ltd": {
                    "companyName": "Royal Caribbean Cruises Ltd",
                    "nickName": "Royal Caribbean Cruises",
                    "exchange": "NYSE",
                    "ticker": "RCL",
                    "url": "www.royalcaribbean.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "3",
                        "story": "Royal Caribbean Cruises Ltd., in partnership with the Pan-American Development Foundation, supports the development of local artisans’ businesses. Throughout the Caribbean and Latin America, this partnership helps artisans become third-party certified as sustainable vendors. Royal Caribbean Cruises invites the artisans to market their products to customers on their cruise ships, which also enhances the customer experience."
                    }
                },
                "Royal Dutch Shell plc (ADR) ADR Class A": {
                    "companyName": "Royal Dutch Shell plc (ADR) ADR Class A",
                    "nickName": "Royal Dutch Shell",
                    "exchange": "NYSE",
                    "ticker": "RDS.A",
                    "url": "http://www.shell.com/",
                    "Climate Action": {
                        "rank": "5",
                        "story": "In June 2015, six major oil companies (including Royal Dutch Shell) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                    },
                    "Partnerships for The Goals": {
                        "rank": "2",
                        "story": "Toyota Motor Corporation works together with parts suppliers, automotive industry organizations, and other relevant organizations to ensure procurement and usage that are free from conflict minerals originating in the Democratic Republic of the Congo or adjoining countries and from illegal conduct including human rights infringement. The manufacturer conducts a reasonable country of origin inquiry with due diligence for its products."
                    }
                },
                "SandP Global Inc": {
                    "companyName": "SandP Global Inc",
                    "nickName": "SandP Global",
                    "exchange": "NYSE",
                    "ticker": "SPGI",
                    "url": "https://www.spglobal.com/",
                    "Clean Water and Sustainability": {
                        "rank": "5",
                        "story": "McGraw Hill Financial’s company Standard and Poors Ratings Services is assisting the work being undertaken by the UN Environment Program’s Natural Capital Declaration and the German Government that analyzes water risk in fixed income analysis."
                    }
                },
                "Solarcity Corp": {
                    "companyName": "Solarcity Corp",
                    "nickName": "SolarCity",
                    "exchange": "NASDAQ",
                    "ticker": "SCTY",
                    "url": "www.solarcity.com/",
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "9",
                        "story": "SolarCity is on the cutting edge of solar energy as they attempt to create products that innovate and change the way the way we use infrastrcture efficiently."
                    }
                },
                "Starbucks Corporation": {
                    "companyName": "Starbucks Corporation",
                    "nickName": "Starbucks",
                    "exchange": "NASDAQ",
                    "ticker": "NASDAQ",
                    "url": "https://www.starbucks.com/",
                    "Zero Hunger": {
                        "rank": "4",
                        "story": "Starbucks will make a decade of agronomy research available for commercialization in collaboration with the Costa Rican Coffee Institute. This research, combined with the company’s far-reaching blueprint for transparent and sustainable sourcing, bene ts more than a million farmers and workers around the world. By sharing this work with the industry, the company will broaden its impact on the 25 million people across the globe who rely on coffee for their livelihoods."
                    },
                    "Partnerships for The Goals": {
                        "rank": "6",
                        "story": "Starbucks will make a decade of agronomy research available for commercialization in collaboration with the Costa Rican Coffee Institute. This research, combined with the company’s far-reaching blueprint for transparent and sustainable sourcing, bene ts more than a million farmers and workers around the world. By sharing this work with the industry, the company will broaden its impact on the 25 million people across the globe who rely on coffee for their livelihoods."
                    }
                },
                "Statoil ASA(ADR)": {
                    "companyName": "Statoil ASA(ADR)",
                    "nickName": "Statoil",
                    "exchange": "NYSE",
                    "ticker": "STO",
                    "url": "https://www.statoil.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "6",
                        "story": "In the countries where Statoil operates, it is committed to recruiting locally and build local capacity and skills. For example, the company’s Johan Sverdrup oil field will be one of the most important industrial projects in Norway over the next 50 years. It is expected to create significant value to Norwegian society through tax payments, job opportunities and contracts to the industry. By the end of 2015, the value of contracts awarded to Norwegian registered companies was over US$4 billion (NOK 34 billion), representing more than 70% of the allocated contract value. In Tanzania Statoil spent around US $900 million (NOK7.6billion) with Tanzanian registered companies between 2010 and 2015, of which the majority was with international companies registered in Tanzania. This represented over 75% of the total procurement spend in Tanzania during the period. In Brazil, Statoil achieved 64% local content for its Peregrino field development, which is well above the 35% target commitment it made to the Brazilian government."
                    },
                    "Climate Action": {
                        "rank": "2",
                        "story": "In June 2015, six major oil companies (including Statoil) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                    },
                    "Life on Land": {
                        "rank": "4",
                        "story": "Statoil supports research programs to increase knowledge about ecosystems and biodiversity, and collaborates with industry peers to share knowledge and develop tools for biodiversity management. At the company’s Leismer project, Statoil is implementing a mitigation and monitoring program to reduce the effects of its activities on local woodland caribou, which is categorized as a threatened species. After clearing land for its Marcellus project, Statoil worked with the United States Fish and Wildlife Service to offset the impact by purchasing 359 acres of land for endangered bats in perpetuity. Fish and Wildlife Service since adopted this approach as a template for future conservation programs. Finally, at the company’s Dudgeon site, it implemented measures to protect great crested newts, water wolves and other protected species when installing an onshore high voltage cable."
                    }
                },
                "Syngenta AG (ADR)": {
                    "companyName": "Syngenta AG (ADR)",
                    "nickName": "Syngenta",
                    "exchange": "NYSE",
                    "ticker": "SYT",
                    "url": "https://www4.syngenta.com/",
                    "Zero Hunger": {
                        "rank": "9",
                        "story": "In Hungary, the combination of record-setting rains and severe droughts had growers looking for ways to protect their soil: too much rain can wash it away – and too little can dry it out making it more susceptible to erosion during heavy winds and precipitation. Conventional tilling techniques can compound these factors and contribute to soil compaction so that water cannot soak into the soil where it is needed. Syngenta’s CONTIVO® system helps growers in Hungary to adopt conservation tillage techniques that leave at least 30% of the previous year’s crop remnants on the surface of the soil before planting. It combines proven conservation tillage practices with innovative seeds technology, suitable equipment and appropriate use of fertilizer and crop protection protocols to protect soil health while still maintaining high yields."
                    },
                    "Life on Land": {
                        "rank": "6",
                        "story": "Syngenta, together with the United Nations Convention to Combat Desertification (UNCCD), has developed the Soil Leadership Academy. The Academy aims to strengthen international policy, decision-making, and frameworks for soil conservation and sustainable land management. It acts as a knowledge broker and is building a network that links research institutes, universities and key decision-makers, offering information and training opportunities to policymakers and land stakeholders worldwide. In 2015, the Academy successfully ran its first policy development simulation exercise on Land Degradation Neutrality for national policymakers at the UNCCD COP 12 in Turkey. Syngenta’s ambition is to bring greater food security in an environmentally sustainable way to an increasingly populous world. The company’s Good Growth Plan (www.goodgrowthplan.com) sets targets focused on boosting resource efficiency, rejuvenating ecosystems and strengthening rural communities."
                    }
                },
                "Teck Resources Ltd (USA)": {
                    "companyName": "Teck Resources Ltd (USA)",
                    "nickName": "Teck Resources",
                    "exchange": "NYSE",
                    "ticker": "TECK",
                    "url": "http://www.teck.com/",
                    "Zero Hunger": {
                        "rank": "6",
                        "story": "Teck, one of the world’s largest producers of zinc, supports an innovative crop nutrition project with China’s Ministry of Agriculture and the International Zinc Association to promote sustainable agriculture. Adding zinc to fertilizer has been demonstrated to increase crop output, improve food security and increase the nutritional quality of crops. Nearly 45% of children in China suffer from zinc deficiency and do not get enough nutrients in their diet. By reaching the company’s target of increasing zinc usage in fertilizer by 20,000 tons in 2016, approximately six million children in China will see improved zinc nutrition. This initiative improves food security, nutrition, and sustainable agriculture, in addition to creating a new market for one of Teck’s products."
                    },
                    "Affordable and Clean Energy": {
                        "rank": "3",
                        "story": "Teck has partnered to develop the Sun Mine solar project, western Canada’s largest solar power facility and the first solar project built on a reclaimed mine site. SunMine is located on Teck’s former Sullivan mine site in Kimberley, British Columbia, once home to the world’s largest lead-zinc-silver mine. Teck provided use of the land and site infrastructure as well as a US$2 million contribution towards SunMine, which uses over 4,000 solar-cell modules mounted on 96 solar trackers that follow sun movement to maximize solar exposure. Participating in SunMine reflects both Teck’s commitment to supporting local communities, even after mining has ceased, and the company’s focus on expanding the use of alternative energy."
                    }
                },
                "Tesla Inc": {
                    "companyName": "Tesla Inc",
                    "nickName": "Tesla Inc.",
                    "exchange": "NASDAQ",
                    "ticker": "TSLA",
                    "url": "https://www.tesla.com/",
                    "Affordable and Clean Energy": {
                        "rank": "4",
                        "story": "Teck has partnered to develop the Sun Mine solar project, western Canada’s largest solar power facility and the first solar project built on a reclaimed mine site. SunMine is located on Teck’s former Sullivan mine site in Kimberley, British Columbia, once home to the world’s largest lead-zinc-silver mine. Teck provided use of the land and site infrastructure as well as a US$2 million contribution towards SunMine, which uses over 4,000 solar-cell modules mounted on 96 solar trackers that follow sun movement to maximize solar exposure. Participating in SunMine reflects both Teck’s commitment to supporting local communities, even after mining has ceased, and the company’s focus on expanding the use of alternative energy."
                    },
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "3",
                        "story": "Tesla's mission to create a more sustainable transportation system has ventured into many facets of transportation. They continue to make strides to make clean energy affordable through decreasing the cost of the cars they produce through innovations such as the Giga Factory."
                    }
                },
                "Teva Pharmaceutical Industries Ltd (ADR) ADR": {
                    "companyName": "Teva Pharmaceutical Industries Ltd (ADR) ADR",
                    "nickName": "Teva Pharmaceuticals",
                    "exchange": "NYSE",
                    "ticker": "TEVA",
                    "url": "www.tevapharm.com/",
                    "Clean Water and Sustainability": {
                        "rank": "1",
                        "story": "Teva Pharmaceutical Industries has several initiatives to reduce water use (through optimizing processes and improving equipment) and reduce waste. For example, the company’s Ulm-Weiler facility in Germany was using a highly complex waste-water treatment plant which was expensive and dif cult to maintain. By identifying opportunities to optimize upstream sections of the plant, the company reduced chemicals and waste, reduced energy used by nearly 50% and created financial savings. In Israel, the company’s Assia site is located in a desert, and it relies heavily on water and electricity for cooling, ventilation, the operation of lab equipment and other necessary actions. By replacing three cooling towers with a closed loop cooling system, Teva reduced water consumption by 59% and electricity consumption by 31%."
                    }
                },
                "Total SA (ADR)": {
                    "companyName": "Total SA (ADR)",
                    "nickName": "Total SA",
                    "exchange": "NYSE",
                    "ticker": "TOT",
                    "url": "www.total.com",
                    "Climate Action": {
                        "rank": "7",
                        "story": "In June 2015, six major oil companies (including Total) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                    }
                },
                "Toyota Motor Corp (ADR)": {
                    "companyName": "Toyota Motor Corp (ADR)",
                    "nickName": "Toyota Motors",
                    "exchange": "NYSE",
                    "ticker": "TM",
                    "url": "https://www.toyota.com/",
                    "Peace, Justice and Strong Institutions": {
                        "rank": "10",
                        "story": "Toyota Motor Corporation works together with parts suppliers, automotive industry organizations, and other relevant organizations to ensure procurement and usage that are free from conflict minerals originating in the Democratic Republic of the Congo or adjoining countries and from illegal conduct including human rights infringement. The manufacturer conducts a reasonable country of origin inquiry with due diligence for its products."
                    }
                },
                "Tripadvisor Inc Common Stock": {
                    "companyName": "Tripadvisor Inc Common Stock",
                    "nickName": "TripAdvisor",
                    "exchange": "NASDAQ",
                    "ticker": "TRIP",
                    "url": "https://www.tripadvisor.com/",
                    "Partnerships for The Goals": {
                        "rank": "1",
                        "story": "TripAdvisor partners with GlobalGiving to identify and support locally driven non-profits with SDG-focused missions."
                    }
                },
                "UBS Group AG": {
                    "companyName": "UBS Group AG",
                    "nickName": "UBS",
                    "exchange": "NYSE",
                    "ticker": "UBS",
                    "url": "https://www.ubs.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "7",
                        "story": "In 2014 UBS launched ‘UBS and Society’ to harness the powerful combination of its global capabilities and its activities in sustainable investing and philanthropy, its environmental and human rights policies, and its community interaction. UBS sees an ever stronger interest among its clients in societal issues, together with a growing desire to use their wealth to help address these issues. UBS guides its clients who want to use their resources to make a positive impact on the individuals, organizations, and communities that need the most without sacrificing returns. One important innovative strategy is impact investing which focuses on investment choices which generate a positive measurable social and environmental impact while achieving financial returns in parallel. One example in which UBS is growing its engagement is the Loans for Growth fund which provides debt capital to specialized SMEs Financing Institutions in frontier and emerging markets thereby fostering economic development, creating jobs and contributing to poverty alleviation."
                    },
                    "Reduced Inequalities": {
                        "rank": "7",
                        "story": "The UBS Optimus Foundation has a unique relationship with UBS, seeking to use the bank’s access to the world’s wealthiest individuals to unlock and optimize financial support for the needs of the most vulnerable children, helping the bank’s clients achieve the highest social return on their philanthropic investments. (All donations go directly to beneficiaries, with UBS covering all administrative costs of the projects.) Over the past 10 years, this has funded more than 300 programs in over 75 countries. The foundation applies an evidence-based approach towards philanthropy, prioritizing programs that focus on the well-being of children under the age of eight (because evidence indicates the critical importance of interventions during early childhood). The combination of UBS’s core capabilities and its Foundation’s development expertise results in a number of highly innovative projects, such as the development of innovative financing models for philanthropic investments including the first Development Impact Bond in Education with ‘Educate Girls’ in India."
                    }
                },
                "Union Pacific Corporation": {
                    "companyName": "Union Pacific Corporation",
                    "nickName": "Union Pacific",
                    "exchange": "NYSE",
                    "ticker": "UNP",
                    "url": "www.up.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "2",
                        "story": "Union Pacific, a U.S railway company, supports diversity across its supply chain including procurement of fuel, engineering services, railroad maintenance and construction materials, rolling stock maintenance and technology. It's spending with diverse suppliers grew an average of 5.7% annually from 2008 to 2015. Further, about 30% of its suppliers reported purchasing goods or services from diverse suppliers in support of the railway company’s supplier diversity initiative."
                    }
                },
                "Vale SA (ADR) ADR": {
                    "companyName": "Vale SA (ADR) ADR",
                    "nickName": "Vale SA",
                    "exchange": "NYSE",
                    "ticker": "VALE",
                    "url": "www.vale.com",
                    "Industry, Innovation, and Infrastructure": {
                        "rank": "6",
                        "story": "The Nacala Logistics Corridor will connect the Moatize Coal mine in northern Mozambique by rail to the deep-water port at Nacala. The agreement for the US$4.4 billion project, signed by joint venture partners Vale and Mitsui in 2014, will upgrade existing railway tracks and construct new ones for handling current and future cargo load, estimated at 22 million tons annually. Of this, 18 tons are for coal transport, and 4 are for general cargo and shared use, including from extensive agricultural development in the region that will be made possible through new access to export markets. The railway also passes through landlocked Malawi, connecting it more directly to overseas export markets."
                    }
                },
                "Visa Inc": {
                    "companyName": "Visa Inc",
                    "nickName": "Visa",
                    "exchange": "NYSE",
                    "ticker": "V",
                    "url": "https://usa.visa.com/",
                    "Decent Work and Economic Growth": {
                        "rank": "1",
                        "story": "Visa Inc co-founded the Better Than Cash Alliance, which is a coalition of public, private and NGO partners working to accelerate the transition to e-payment systems globally to empower people and grow emerging economies."
                    }
                },
                "Wal-Mart Stores Inc": {
                    "companyName": "Wal-Mart Stores Inc",
                    "nickName": "Walmart",
                    "exchange": "NYSE",
                    "ticker": "WMT",
                    "url": "https://www.walmart.com/",
                    "Quality Education": {
                        "rank": "2",
                        "story": "Walmart recognizes the importance of STEM education for the creation of a robust talent pipeline for the company in the future. In 2015, the Walmart Innovation Lab sponsored more than 300 students for group lab tours. This outreach also included several tech talks and innovation roadshows for students majoring in computer science and various engineering disciplines at major universities across the country. Walmart continues to support organizations like the STEM Education Coalition, which works to inform federal and state policymakers on the critical role that STEM education plays in U.S. competitiveness."
                    },
                    "Gender Equality": {
                        "rank": "5",
                        "story": "Walmart launched a dedicated online space to give shoppers the opportunity to buy unique products while supporting small women-owned business around the world. It also launched a global women’s economic empowerment initiative to harness the company’s size and scale to empower women across the supply chain. By 2016 it aims to source $20 billion from women-owned businesses in the US and double international sourcing."
                    },
                    "Responsible Consumption and Production": {
                        "rank": "10",
                        "story": "Walmart has introduced the Sustainability Leaders shop which identifies products made by companies that have scored as best in class in Walmart’s Sustainability Index. The Sustainability Index is a supplier scorecard program that is the result of years of work with The Sustainability Consortium, an independent, nonpro t organization that collaborates with more than 100 product manufacturers, nonprofits, and academic researchers to create science-based measurement tools."
                    }
                },
                "Walt Disney Co": {
                    "companyName": "Walt Disney Co",
                    "nickName": "Walt Disney Co.",
                    "exchange": "NYSE",
                    "ticker": "DIS",
                    "url": "https://thewaltdisneycompany.com/",
                    "Life Below Water": {
                        "rank": "1",
                        "story": "Disney Cruise Line, a cruise company, features advanced wastewater purification systems (AWPS) that utilize natural processes to treat and purify onboard wastewater to levels far exceeding international shipping standards. (A global environmental organization reported that an average cruise ship with 3,000 passengers and crew produces about 21,000 gallons of sewage a day, yet 40% of 162 cruise ships use an outdated technology which does not effectively treat harmful waste from the sewage released to the ocean). Further, Disney Cruise Line uses biodegradable and organic cleaning products wherever possible in order to avoid potentially harmful phosphates and other chemicals associated with traditional cleaners."
                    }
                },
                "The Western Union Company": {
                    "companyName": "The Western Union Company",
                    "nickName": "Western Union",
                    "exchange": "NYSE",
                    "ticker": "WU",
                    "url": "https://www.westernunion.com/",
                    "Quality Education": {
                        "rank": "5",
                        "story": "In 2014 The Western Union Company announced the launch of \"Apna Sapna\", a financial literacy program created in eight languages for migrant workers in the United Arab Emirates (‘UAE’) to help them develop the awareness and skills to manage their finances and plan for the future. \"Apna Sapna\", which in Hindi means \"Our Dream\", is endorsed by the UAE Labor Ministry and aims to address the challenges of migrant workers who are often unsure about how to achieve their long-term financial goals."
                    }
                },
                "Xerox Corp": {
                    "companyName": "Xerox Corp",
                    "nickName": "Xerox",
                    "exchange": "NYSE",
                    "ticker": "XRX",
                    "url": "https://www.xerox.com/",
                    "Gender Equality": {
                        "rank": "2",
                        "story": "Xerox has introduced the “WilsonRule,” named after the company’s first CEO Joseph Wilson, which will require that women and minorities be among the final pool of qualified candidates for every open management position in the U.S. and among the finalists outside the U.S.A. The company hopes that this rule will help drive diverse representation at all levels of management. This policy was announced at White House Demo Day in 2015 and was referenced by President Obama."
                    },
                    "Life on Land": {
                        "rank": "9",
                        "story": "Xerox’s 2020 goals include helping to preserve the world’s forests and biodiversity. The company works with its customers, suppliers and other stakeholders to support the development of a sustainable paper cycle through paper sourcing guidelines and environmentally sound paper offerings, as well as through products and services that decrease dependency on paper. The “earth smart” feature, has been integrated into the Xerox global print driver, bringing several resource-saving settings together at the single click of a button. These features, such as duplex (two-sided printing), n-up (multiple pages per sheet), proof print and toner saving modes, make it easier for customers to make responsible print choices."
                    }
                }
            }
        },
        sdgCat: {
            "Mastercard Inc": {
                "companyName": "Mastercard Inc",
                "nickName": "MasterCard Inc.",
                "exchange": "NYSE",
                "ticker": "MA",
                "url": "https://www.mastercard.com",
                "No Poverty": {
                    "rank": "1",
                    "story": "MasterCard, with US$11 million of funding from a charitable foundation, has established MasterCard Labs which is an innovation lab in East Africa aiming to expand digital financial services to 100 million people globally. It will generate new ideas with local entrepreneurs, Government and other stakeholders across East Africa, while an additional US$8 million was reserved for ideas reaching the incubation phase."
                },
                "Zero Hunger": {
                    "rank": "8",
                    "story": "MasterCard and the World Food Programme have rolled out an innovative e-voucher program in Lebanon to deliver food assistance to Syrian refugees. In April alone, nearly US$20 million was injected into local markets. Today, about 715,000 refugees buy food at nearly 250 merchants who saw a 6-12% increase in revenues. The program intended to reach 1.1 million refugees in 2014. A similar program in Jordan will distribute US$250 million n food assistance and reach 710,000 Syrian refugees this year."
                },
                "Quality Education": {
                    "rank": "3",
                    "story": "MasterCard has partnered with the Confederation for All India Traders to promote the digitization of payments among Indian traders, through knowledge sharing and training sessions across the country, in line with the Government’s ‘Digital India’ vision."
                },
                "Gender Equality": {
                    "rank": "9",
                    "story": "MasterCard has launched Girls4Tech, an educational outreach program that targets teenage girls to encourage STEM (science technology engineering math) careers. This program is currently live in India, Duai, Frankfurt, and London."
                },
                "Sustainable Cities and Communities": {
                    "rank": "6",
                    "story": "MasterCardisaLeadPartneroftheSmartCities Council, an industry coalition to advance smart city development and innovation. This initiative will equip city leaders with the tools and resources to better plan,  nance, and deploy cutting-edge smart city technologies."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "7",
                    "story": "MasterCard, in partnership with the Government of Nigeria, has rolled out a biometric National eID Card to more than 13 million Nigerians with electronic payment functionality. This program will reach more than 100 million Nigerians, making it the broadest financial inclusion initiative of its kind on the African continent."
                },
                "All": "gold"
            },
            "Bank of Nova Scotia": {
                "companyName": "Bank of Nova Scotia",
                "nickName": "Scotiabank",
                "exchange": "NYSE",
                "ticker": "BNS",
                "url": "http://www.scotiabank.com/",
                "No Poverty": {
                    "rank": "2",
                    "story": "Scotiabank is working to advance financial inclusion and economic development of communities through technology including mobile banking, relevant products (including low/no fee accounts), micro and consumer financing, small business lending, and financial education."
                }
            },
            "Kellogg Company": {
                "companyName": "Kellogg Company",
                "nickName": "Kellogg's",
                "exchange": "NYSE",
                "ticker": "K",
                "url": "http://www.kelloggcompany.com/",
                "No Poverty": {
                    "rank": "3",
                    "story": "Starbucks offers a drink called the Oprah Chai. A portion of the money earned whenever a drink is purchased will go directly to Oprah Winfrey’s charity, the Leadership Academy Foundation. The foundation pledges to bring educational opportunities, especially opportunities for higher education, to girls in South Africa."
                },
                "Gender Equality": {
                    "rank": "7",
                    "story": "Kellogg Company has launched a series of projects to understand and help overcome the barriers (including limits to accessing skills, information and inputs) for women in cocoa farming communities in Côte d’Ivoire. The projects include gender sensitization training, situational analysis, and training for up to 1,000 women farmers to help them improve their agricultural and business skills, supported by the African Cocoa Initiative."
                }
            },
            "Aon PLC": {
                "companyName": "Aon PLC",
                "nickName": "Aon PLC",
                "exchange": "NYSE",
                "ticker": "AON",
                "url": "http://www.aon.com/",
                "No Poverty": {
                    "rank": "4",
                    "story": "For almost 20 years, Aon Limited and other companies and insurance brokers, local authorities and registered social landlords in the UK to provide tenants with accessible, affordable home contents insurance. The cover is paid mainly with rent, on a weekly basis, with a zero excess feature, and in many cases without the need for a bank account."
                }
            },
            "Unilever NV (ADR) ADR": {
                "companyName": "Unilever NV (ADR) ADR",
                "nickName": "Unilever",
                "exchange": "NYSE",
                "ticker": "UN",
                "url": "https://www.unilever.com/",
                "No Poverty": {
                    "rank": "5",
                    "story": "Unilever supports several companies to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                },
                "Good Health and Well-Being": {
                    "rank": "1",
                    "story": "Unilever has invested in innovative campaigns and partnerships to improve oral health, recognizing the opportunity to grow its business while having a positive impact on health. These include investments in Africa which increased revenue by over a quarter from 2014 to 2015 against a background of poor oral health caused by lack of fluoride toothpaste and scarce dental care, and with 95% of 11 to 14-year-olds from low-income families suffering from untreated dental decay. The company’s market-leading brand, Signal, drives communications to raise awareness and improve tooth brushing habits. Signal is also known as Pepsodent (Asia and Latin America), Mentadent (Italy), Zhong Hua (China), Aim (Greece), and P/S (Vietnam). The Signal brand aims to reach 50 million people by 2020, which was already exceeded by 2015, with 71 million people reached via innovative campaigns and partnerships."
                },
                "Clean Water and Sustainability": {
                    "rank": "10",
                    "story": "Unilever has developed a new soap that offers better germ-fighting efficacy. In addition to providing better protection against bacteria that cause stomach infections, typhoid, and cholera, it also combats skin and eye infections. As a result, this innovation has created an affordable product that addresses serious health risks, while also helping grow the company’s overall brand, with saes up 15% in 2014."
                },
                "Industry, Innovation, and Infrastructure": {
                    "rank": "2",
                    "story": "Unilever, with their many innovations in their many subsidiary companies, has created a more sustainable infrastructure for the world."
                },
                "Reduced Inequalities": {
                    "rank": "8",
                    "story": "Several food, beverage, and consumer goods companies, including Unilever, have become accredited Living Wage Employers for paying their UK employees a minimum of the Living Wage, an hourly rate which is set independently by the Living Wage Foundation according to the cost of living in the UK. This has been shown to improve employee productivity and retention and reduce absenteeism"
                },
                "Responsible Consumption and Production": {
                    "rank": "5",
                    "story": "Some companies, including Unilever, are Carbon Pricing Champions and have aligned with the Business Leadership Criteria on Carbon Pricing. This includes setting an internal carbon price high enough to affect investment decisions to drive down greenhouse gas emissions materially. The REFLEX Project is a collaborative Research and Development project which aims to create a circular economy for flexible packaging (-currently comprising over 560,000 tonnes of UK land ll each year). The Project is exploring ways of increasing the recyclability of flexible packaging by targeting each step in the supply chain – pack design, manufacture, sorting and reprocessing. It aims to develop: new innovative packaging designs; techniques to make blended polymers from flexible packaging which perform in new uses; and improved identification and sorting of recyclable, flexible packages from the waste stream. The Project is an example of the whole supply chain working together: leading brands, polymers producers, packaging converters, recycling companies and technology suppliers. It is co-funded by Innovate UK, an executive non-departmental public body. Project partners include Unilever UK Central Resources Ltd"
                },
                "Life on Land": {
                    "rank": "7",
                    "story": "Unilever and the World Wildlife Fund have announced a one-year, international partnership to engage consumers in the fight against deforestation. As part of the partnership, Unilever and the World Wildlife Fund will help protect a million trees by supporting forest protection programs in Brazil and Indonesia. The company believes that this partnership is an opportunity to engage consumers on sustainability issues and give them practical ways to make a difference."
                },
                "All": "platinum"
            },
            "Rio Tinto plc": {
                "companyName": "Rio Tinto plc",
                "nickName": "Rio Tinto",
                "exchange": "NYSE",
                "ticker": "RIO",
                "url": "http://www.riotinto.com/",
                "No Poverty": {
                    "rank": "6",
                    "story": "Rio Tinto Minera Peru’s La Granja Project developed an approach that integrated and aligned the business and project schedule with a responsible approach to engagement and agreement-making on land access. The company worked with local communities to design and implement an engagement process to discuss the possibility of land acquisition and resettlement if the project proceeded, and agree on general terms and principles that would be applied in future negotiations. During the process, community members had the opportunity to share their concerns, fears, and interest in considering the possibility of resettlement. The process also yielded critical information for the company on the likelihood and potential costs of land acquisition and resettlement."
                },
                "Gender Equality": {
                    "rank": "8",
                    "story": "Rio Tinto and the Centre for Social Responsibility in Mining at the University of Queensland, Australia developed a how-to guide that provides specific suggestions on gender-sensitive approaches to engaging with communities and stakeholders and finding solutions that benefit both the company and society. The guide provides a rationale for integrating gender into the business and shares relevant international protocols. Clear explanations that follow a management system approach offer specific how-to steps along with case studies."
                }
            },
            "Braskem SA (ADR) ADR Class A": {
                "companyName": "Braskem SA (ADR) ADR Class A",
                "nickName": "Braskem",
                "exchange": "NYSE",
                "ticker": "BAK",
                "url": "https://www.braskem.com",
                "No Poverty": {
                    "rank": "7",
                    "story": "‘Ser+ realizador’ is a collaborative initiative promoted by Braskem, in partnership with Ambev, Bunge, Gerdau and Sebrae, which aims to increase recycling of post-consumption waste in Brazil while also supporting the social and economic development of waste recycling workers. The initiative fostered increased efficiency in the recycling value chain through investments in equipment and infrastructure of the waste sorting and processing units, as well as training and personalized consulting for recycling workers. In turn, this enables workers to increase their productivity and income. In 2015, ser+ realizador benefitted 70 cooperatives, comprising over 3,538 waste recycling workers. The best results were achieved by the 48 cooperatives who received monthly guidance. These cooperatives sent more than 25,000 tons of waste for recycling (12% of which referred to plastics in Braskem’s value chain: PP, PE and PVC), and saw 70% of their members increasing their income in the year."
                },
                "Zero Hunger": {
                    "rank": "7",
                    "story": "Braskem, a petrochemical company, and leading biopolymer producer produces resins for plastic films used in agriculture to cover soil, knows as mulches. In 2015, in partnership with Eletro Plastic and the Federal University of Uberlândia in Brazil, Braskem developed a field study on the use of mulching in coffee crops. After a year and a half of planting, the study found that crops with mulching had better results than control samples because mulching prevents the development of weeds, thereby reducing costs and the need for pre-emergent herbicides. The solution also saves significant amounts of water by reducing water evaporation, thereby allowing the area to remain moist with reduced irrigation."
                },
                "Decent Work and Economic Growth": {
                    "rank": "8",
                    "story": "With a view to promoting sustainable and equitable growth in its value chain, Braskem created Braskem Labs, a program that select selects entrepreneurs using Braskem’s products (chemical products and plastic applications) in an innovative way to address socio-environmental issues. The program, delivered in partnership with Endeavor, a global NGO focused on helping entrepreneurs succeed, provides intensive capacity building, including one-on-one mentoring with Braskem executives, with a view to accelerating the companies’ growth and scaling up their operations to maximize social and environmental bene ts. It also provides access to markets, investors and Braskem partners. Projects supported in 2015 include a low-price prosthetic foot, a PVC house that can be built in 2 days, and sanitation and rainwater storage solutions."
                },
                "Industry, Innovation, and Infrastructure": {
                    "rank": "7",
                    "story": "With a view to promoting sustainable and equitable growth in its value chain, Braskem created Braskem Labs, a program that selects entrepreneurs using Braskem’s products (chemical products and plastic applications) in an innovative way to address socio- environmental issues. The program, delivered in partnership with Endeavor, a global NGO focused on helping entrepreneurs succeed, provides intensive capacity building, including one-on-one mentoring with Braskem executives, with a view to accelerating the companies’ growth and scaling up their operations to maximize social and environmental bene ts. It also provides access to markets, investors and Braskem partners. Projects supported in 2015 include a low-price prosthetic foot, a PVC house that can be built in 2 days, and sanitation and rainwater storage solutions."
                },
                "All": "bronze"
            },
            "The Coca-Cola Co": {
                "companyName": "The Coca-Cola Co",
                "nickName": "Coca-Cola Co.",
                "exchange": "NYSE",
                "ticker": "KO",
                "url": "http://www.coca-cola.com/",
                "No Poverty": {
                    "rank": "8",
                    "story": "Coca-Cola Co. supports several companies to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                },
                "Gender Equality": {
                    "rank": "10",
                    "story": "In 2010, The Coca-Cola Company announced 5by20, a commitment to enable the economic empowerment of five million women entrepreneurs across the company’s global value chain by 2020. Coca-Cola does this by working with partners to develop and implement business skills training, providing access to funding and increasing opportunities for mentoring. At year-end 2014, the 5by20 initiative had reached more than 865,000 women in 52 countries sice it began in 2010."
                },
                "Clean Water and Sustainability": {
                    "rank": "9",
                    "story": "The Coca-Cola Company has set an ambitious target to safely return to communities and nature an amount of water equal to what the company uses in its finished beverages and their production, by 2020. Based on the Coca-Cola system’s global water replenishment projects through to December 2014, the system is balancing the equivalent of an estimated 94% of the water used in its finished beverages, based on 2014 sales volume. Between 2004 -2014, Coca-Cola replenished an estimated 153.6 billion liters of water back to communities and nature through 209 community water projects in 61 countries. In addition, in 2014 the Coca-Cola system returned approximately 126.7 billion liters of water used in its manufacturing processes back to communities and nature though treated wastewater."
                },
                "Decent Work and Economic Growth": {
                    "rank": "9",
                    "story": "The Coca-Cola Company created Micro Distribution Centers (MDCs) to solve the problem of access to its product for countries such as Ethiopia. Narrow roads meant that big delivery trucks could not reach the tiny local shops and a lack of storage facilities meant that stores could not stock large amounts of the drinks. MDCs are local depots in hard to reach areas that delivery trucks cannot travel through. The people who set up these MDCs employ others to sell and distribute the drinks, often by bicycle or pushcart. These MDCs are fully owned by African entrepreneurs, and work with local bottlers. There are now more than 3000 MDCs in Africa. As the program expands, the company hopes for 50% or more of these MDCs o be owned by women."
                },
                "Sustainable Cities and Communities": {
                    "rank": "1",
                    "story": "The Coca-Cola Company has invested over US$500m in cities in Vietnam, developing local manufacturing and distribution capacity, developing new filling lines and installing new cold-drink coolers with local customers, helping local businesses boost beverage sales. This investment has created 500 new jobs locally in Vietnam, with 99% of its total labor force filled by local Vietnamese employees. These direct jobs then generated an estimated additional 5,000 job opportunities in supporting industries. It has also continued to invest heavily in building sustainable communities in Vietnam with approximately US$1.5 million dedicated to local projects since 2010."
                },
                "Responsible Consumption and Production": {
                    "rank": "6",
                    "story": "Coca-Cola and others commissioned independent research teams, supported by their companies and Oxfam (a not-for-pro t organization), to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "3",
                    "story": "Coca-Cola is actively working with stakeholders to foster transparency and greater respect for human rights."
                },
                "Partnerships for The Goals": {
                    "rank": "10",
                    "story": "Coca-Cola and others commissioned independent research teams, supported by their companies and Oxfam (a not-for-profit organization), to conduct Poverty Footprint Studies which assess the impact of their operations on people living in poverty. These informed improved policies, practices and product design to enhance economic and social impact. The UN Global Compact and Oxfam, in close collaboration with a multi-stakeholder advisory group, have since partnered to launch the Poverty Footprint tool, which enables companies and partners to make a people-centered assessment of corporate impacts on poverty."
                },
                "All": "diamond"
            },
            "Fresenius Medical Care AG and Co. (ADR)": {
                "companyName": "Fresenius Medical Care AG and Co. (ADR)",
                "nickName": "Fresenius Medical Care",
                "exchange": "NYSE",
                "ticker": "FMS",
                "url": "https://fmcna.com/",
                "No Poverty": {
                    "rank": "9",
                    "story": "Fresenius MedicalCare aims to develop innovative products that are not only of the highest quality but are also affordable so that more caregivers and patients can benefit from them. Based on its experience in operating the company’s own dialysis clinics, it does not consider these to be incompatible aims. Between 2013 and 2015, Fresenius has reorganized its research and development activities towards a more global approach which enables the company to respond even better to the demand for improved high-quality yet cost-efficient treatment methods. In doing so, the company continues to take regional market conditions into account by offering a differentiated product range in more than 120 countries. Its new RandD strategy is focused on improving the company’s ability to deliver innovative, competitive products on time and enhaning focus on developing cuntries."
                },
                "Climate Action": {
                    "rank": "10",
                    "story": "Fresenius Medical Care provides funds, dialysis machines and medical supplies for institutions that need specific aid quickly in crisis situations such as natural disasters resulting from climate change. For example, in North America, the Fresenius Medical Care Incident Command Center coordinates emergency task forces in critical situations such as during hurricanes, storm surges or in the tornado season, in collaboration with the Kidney Community Emergency Response Coalition. After the devastating earthquake in Nepal in 2015, the company provided dialysis machines, water treatment systems, and disposable accessories, enabling dialysis patients to receive their vital treatment even though many medical facilities and items of equipment were badly damaged by the earthqake."
                }
            },
            "Sanofi SA (ADR)": {
                "companyName": "Sanofi SA (ADR)",
                "nickName": "Sanofi",
                "exchange": "NYSE",
                "ticker": "SNY",
                "url": "http://en.sanofi.com/",
                "No Poverty": {
                    "rank": "10",
                    "story": "Sanofi and PlaNet Finance (a not-for-profit organization) have committed to the fight against poverty and to providing access to healthcare for disadvantaged populations, particularly in Madagascar and Benin, through the creation of supplemental health care coverage programs. In Madagascar, most of the Malagasy population works in the agricultural sector under dif cult conditions. Their low incomes make it dif cult to pay for healthcare. To promote access to quality healthcare for Malagasy entrepreneurs, the Sano supported ZINA project enabled a health micro-insurance platform to be established in six Madagascar regions. To date, ZINA has supportednearly 10,000 beneficiaries."
                },
                "Good Health and Well-Being": {
                    "rank": "5",
                    "story": "Sanofi has developed an AllStar™ pen which it describes as ‘a state of the art insulin pen for patients in emerging markets.' The pen demonstrates the company’s focus on innovation diabetes and its commitment to finding solutions that are adapted to local market needs. To improve access to affordable devices, in 2012 Sanofi India Limited launched the first re-usable insulin pen manufactured by a global company in India. Allstar™ manufacturing requires state of the art and well-controlled processes that Sanofi transferred through a collaborative approach to two local manufacturers based in India. AllStar™ is indicated for patients already using products in Sano ’s insulin portfolio as well as those who are starting to take insulin for the first time. Since it was launched in India, AllStar™ has been marketed in several additional emerging countries including Bangladesh, South Africa, Malaysia, Thailand, and Egypt. In 2015, Sanofi joined Be He@lthy Be Mobile, a ground-breaking initiative led by the International Telecommunication Union (ITU) in collaboration with the WHO, public-private sector organizations, Governments, the United Nations, industry, and academia, in the field of non-communicable diseases. Using mobile technology, the program helps improve the prevention, treatment, and care of non-communicable diseases in more than eight priority countries globally. In diabetes, mobile solutions represent a unique opportunity to create a much-needed continuum of care, from prevention advice to diabetes support for different population segments. A project has already started in Senegal which includes targeted SMS messaging to the general population, people with diabetes and healthcare professionals."
                },
                "Life Below Water": {
                    "rank": "10",
                    "story": "Sanofi supports take-back programs that collect unused and expired medicines from patients and inform consumers about their safe disposal. This initiative aims to protect local ecosystems, as many consumers incorrectly flush unused medicines down the toilet, resulting in contamination of water resources. Sanofi has supported such programs in 15 countries, including Brazil, Colombia, Mexico, Philippines, Saudi Arabia and Venezuela. In Colombia, the Punto Azul (Blue Point) program has set up collection points for unused medicines across 23 Colombian states, representing 48% of the country’s population. This program, which is funded by manufacturers and importers of medicines, was created by the National Association of Colombian Enterprises (ANDI) in 200."
                },
                "Partnerships for The Goals": {
                    "rank": "9",
                    "story": "In January 2012 Sanofi entered into a data sharing collaboration with the Worldwide Antimalarial Resistance Network (WWARN), to aid in its attempt to detect and fight resistance to current anti-malarial drugs around the world. Through this agreement, Sanofi will provide data to WWARN’s central database of information relating to antimalarial drug resistance, for medication developed by Sanofi and the Drugs for Neglected Diseases initiative (DNDi). Although mortality rates due to malaria have fallen by more than 25% since 2000, these gains are now threatened by an emerging resistance to the globally-recommended artemisinin-combination therapies in Southeast Asia. It is therefore crucial that all stakeholders join forces to monitor and fight the spread of these resistances to life-saving drugs, and invest in the search for new medicines. In 2013 Sanofi signed a similar partnership with ACT Consortium in order to share safety data on this anti-malarial medicine with academic researches."
                }
            },
            "ABB Ltd (ADR)": {
                "companyName": "ABB Ltd (ADR)",
                "nickName": "ABB Ltd.",
                "exchange": "NYSE",
                "ticker": "ABB",
                "url": "http://new.abb.com/",
                "Clean Water and Sustainability": {
                    "rank": "7",
                    "story": "Abbott has achieved a 19% reduction in its water intake (adjusted for sales) against its commitment of a 30% reduction by 2020, compared to its 2010 level. It has used global water risk mapping tools from the World Resource Institute (WRI) and the WBCSD to help identify manufacturing plants in water-stressed regions, and it is participating in the CDP Water Reporting Program to share critical data on its water performance while also gaining valuable insights into the water performance of other companies in the healthcare sector and beyond. Some of Abbott’s nutrition sites achieving significant reductions in water use include: its Columbus, Ohio, plant reduced water usage by more than 46 million gallons (13% annually) through cooling tower water reclamation and reuse, among other projects; its China facility decreased water usage by 12% through projects such as recovering evaporator condensate which also saved fuel."
                },
                "Affordable and Clean Energy": {
                    "rank": "6",
                    "story": "ABB Ltd. is a pioneer in microgrids. In April 2016 ABB announced a new innovation building on Emax 2, which it describes as the first ever combined circuit breaker and power manager. The new software-based innovation for the Emax 2 smart circuit breaker makes microgrid architectures simpler and more cost-effective than ever before. The new upgrades combine advanced protection, programmable logic, full connectivity, easy integration and comprehensive microgrid energy management in one device. ABB has executed 30 microgrid projects globally which coordinate distributed energy resources, integrating renewables with conventional power sources, networking with the grid or operating self-sufficiently. Low-voltage microgrids are helping accelerate the rollout of renewable energy by integrating small-scale wind or solar energy production of up to 4MW with battery energy storage systems."
                },
                "Sustainable Cities and Communities": {
                    "rank": "7",
                    "story": "ABBLtd.hasdevelopedanewautomatedfast- charging system which removes the main hurdles to the more widespread use of electric buses. With a typical charging time of 4-6 minutes, the system speeds up the charging process and is easily integrated into existing bus lines, thanks to its automated rooftop connection. ABB Ltd. presented its voice-operated smart home automation system, ABB-free@home, at a consumer electronics fair in 2015. The system allows users to control over 60 smart home automation functions, such as lighting, heating, blind control and door communication, with voice commands. This can significantly improve home energy efficiency."
                }
            },
            "Abbott Laboratories": {
                "companyName": "Abbott Laboratories",
                "nickName": "Abbott Labs",
                "exchange": "NYSE",
                "ticker": "ABT",
                "url": "www.abbott.com/",
                "Zero Hunger": {
                    "rank": "2",
                    "story": "Abbott’s new production facility in Jhagadia will source up to 80% of its ingredients locally in India in order to meet the growing demand for milk in India while building the supply of high-quality milk needed for Abbott’s growing nutrition business. Working with local suppliers, Abbott is providing tools, training and modern milk cooling facilities to increase the production of high-quality milk, which will, in turn, raise rural farmer incomes.Because women play a key role in dairy farming – yet often have little decision-making power – the company is also training women dairy farmers, improving their technical and business skills. Abbott is pursuing a similar strategy around the world as demand for dairy products and better nutrition rises with incomes and with growing urbanization."
                },
                "Reduced Inequalities": {
                    "rank": "9",
                    "story": "Abbott believes that diversity in its suppliers is essential to its ability to compete, so it collaborates with diverse groups that reflect the community it serves. The company finds that diversity brings new perspectives to the table as it works to develop collaborative, innovative solutions. Abbott’s supplier diversity policy ensures equitable opportunities are afforded to businesses that are either small or are majority owned and operated by a woman, a member of an ethnic minority, a veteran or a person with a disability. In 2015, this spend was US$950 million, representing 8% of total spend in Abbott’s global supply chain. This included a 4% annual increase in spending with small businesses and a 5% increase in spending with small women-owned businesses. One example of success in 2015 was Abbott’s expansion of its partnership with Marathon Medical, a veteran-owned business, through an agreement to supply the U.S. Indian Health Service with US$30 milion of supplies."
                },
                "Life on Land": {
                    "rank": "8",
                    "story": "Abbott’s nutrition plant in Jhagadia, India, reuses water from the plant to nourish a forest of eucalyptus and casuarina trees planted on-site. Studies show these efforts are improving the groundwater table and soil fertility."
                }
            },
            "Agrium Inc. (USA)": {
                "companyName": "Agrium Inc. (USA)",
                "nickName": "Agrium Inc.",
                "exchange": "NYSE",
                "ticker": "AGU",
                "url": "www.agrium.com/",
                "Zero Hunger": {
                    "rank": "10",
                    "story": "Agrium has worked with stakeholders to develop the 4R Solution to help smallholder farmers sustainably increase yields and profitability on their farms. This is accomplished under a Solution model that uses on-farm demonstrations to provide growers with nutrient management knowledge and regionally specific 4R nutrient recommendations created through the Nutrient Expert® decision support software and by increasing local adoption of these recommendations by expanding extension capacity. The Solution is scaled through shared value partnerships which bring government, NGOs and the private sector together to expand extension capacity, while the fertilizer industry, researchers, and smallholders develop regionally specific 4R recommendations using Nutrient Expert. The end result is increased yields and profits that smallholder farmers can use to expand their farming operations and increase access to education, healthcare and a more stable and nutritious food supply. The Solution is being expanded from Kenya where over 3,000 farmers, 100 extensions officers, and 300 undergraduates have been trained on 4R practices and manaement, to other countries."
                },
                "Climate Action": {
                    "rank": "8",
                    "story": "Agrium has been a leader in developing the 4R based Nitrous Oxide Emission Reduction Protocol (NERP), adopted to reduce GHG emissions resulting from nitrogen applications at the farm level. The protocol is globally scalable, and it is currently being regionally customized to consider each region’s unique climate, soil, farming practices and culture. While the potential of this solution is still being quantified, early estimates of emission reduction from nutrient stewardship practices exceed 8 Mt in North America alone. The protocol quantifies these nitrous oxide reductions, which are then traded where carbon offset markets exist, or they are used in voluntary value chain programs to deliver on stakeholder commitments to improve sustainability performance. Development of new 4R source, rate, time, and place best management practices through new innovations in precision agriculture, controlled release fertilizers, data management and validation will further optimize these reductions while increasing local jobs and economic returns."
                }
            },
            "Amazon.com, Inc.": {
                "companyName": "Amazon.com, Inc.",
                "nickName": "Amazon",
                "exchange": "NASDAQ",
                "ticker": "AMZN",
                "url": "https://www.amazon.com/",
                "Life Below Water": {
                    "rank": "9",
                    "story": "Amazon, with their acquisition of Whole Foods, is on the cutting edge of seafood reproduction and protocol to continue to help our oceans become a beacon for life n earth."
                }
            },
            "Anheauser Busch Inbev NV (ADR)": {
                "companyName": "Anheauser Busch Inbev NV (ADR)",
                "nickName": "Anheuser Busch",
                "exchange": "NYSE",
                "ticker": "BUD",
                "url": "www.anheuser-busch.com/",
                "Responsible Consumption and Production": {
                    "rank": "9",
                    "story": "Anheuser-Busch InBev’s energy reduction policies have saved the company more than US$ 55 million since 2012, including more than $24 million in 2014. The company challenged itself to meet four goals by 2017: reduce global energy use per hectolitre by 20%, reduce global greenhouse gas emissions per hectolitre of production by 10% (including a 15% reduction in China), reach a 70% global average of eco-friendly cooler purchases annually, and reduce GHG emissions in logistics by 15%. The company has already achieved its emissions goals three years ahead of schedule and hopes to continue increasing efficien operations."
                },
                "Climate Action": {
                    "rank": "1",
                    "story": "Anheuser-Busch InBev announced a commitment to secure 100% of the company’s purchased electricity from renewable sources by 2025."
                }
            },
            "Apple Inc.": {
                "companyName": "Apple Inc.",
                "nickName": "Apple",
                "exchange": "NASDAQ",
                "ticker": "AAPL",
                "url": "https://www.apple.com/",
                "Industry, Innovation, and Infrastructure": {
                    "rank": "8",
                    "story": "Apple, with the unveiling of their new completely sustainable work campus called, Apple Park, in California has shown that they are committed to innovating to meet the demands for a more sustainable world."
                }
            },
            "ArcelorMittal SA (ADR)": {
                "companyName": "ArcelorMittal SA (ADR)",
                "nickName": "ArcelorMittal",
                "exchange": "NYSE",
                "ticker": "MT",
                "url": "corporate.arcelormittal.com/",
                "Industry, Innovation, and Infrastructure": {
                    "rank": "5",
                    "story": "ArcelorMittal is applying a shared infrastructure approach, connecting its iron ore operations to an expanded port through the development of railway infrastructure through Liberia. The company is developing a 250km railway line from Yekepa to Buchanan and developing the iron ore terminal at Buchanan port to a capacity of 15mpta. The shortest route through Guinea for the Simandou deposit is Conakry, which is 800km away, as compared to 350km to the port of Buchanan in Liberia. The World Bank estimates that the cost savings of going through Liberia are roughly US$1 billion over a twenty year period (US$3.49 per ton via Conakry versus US$1.22 per ton via Buchanan) when the full lifecycle costs of running the two alternative railroads are taken into account."
                }
            },
            "AstraZeneca plc (ADR)": {
                "companyName": "AstraZeneca plc (ADR)",
                "nickName": "AstraZeneca",
                "exchange": "NYSE",
                "ticker": "AZN",
                "url": "https://www.astrazeneca.com/",
                "Good Health and Well-Being": {
                    "rank": "10",
                    "story": "AstraZeneca has developed an access to medicines program known as Healthy Heart Africa. The number of deaths attributable to cardiovascular disease in Africa grew more significantly than any other condition from 2000 to 2012, and it is currently the third-leading killer in the region, closely behind HIV/AIDS and respiratory infections. Yet it is estimated that in some African countries less than 10% of people with hypertension have access to effective treatment. AstraZeneca launched Healthy Heart Africa in Kenya in 2014 as the first step towards its goal of treating 10 million people with hypertension in Africa over ten years. Working with local partners, AstraZeneca set about providing training and establishing healthcare centers for screening and treating patients. In 2016, the company will also establish new partnerships to continue to test approaches in Kenya and other countries in the region. There will also be an independent impact evaluation of the program to provide further insight about how Healthy Heart Africa can be expanded and scald up to other countries."
                },
                "Industry, Innovation, and Infrastructure": {
                    "rank": "4",
                    "story": "AstraZeneca is constructing a new purpose-built facility on the Cambridge Biomedical Campus which is home to its UK-based global research and development center and corporate headquarters, including 2,000 employees. The company is working closely with construction partners to achieve ‘excellent’ ratings for sustainability performance under the Building Research Establishment Environmental Assessment Methodology. The steps AstraZeneca is taking include: using optimal heat differentials in cooling technology to minimize energy consumption; optimizing the use of natural light in place of artificial light; installing a combined heat and power station to meet energy needs on site; and installing rainwater recovery systems throughout the site."
                },
                "Life Below Water": {
                    "rank": "7",
                    "story": "AstraZeneca is continually looking for ways to better understand, avoid and manage risks associated with the presence of trace amounts of pharmaceuticals in waterways. At the start of 2015, the company initiated a €10 million (US$ 11.3 million) partnership with the European Commission under the Innovative Medicines Initiative. This project – called Intelligent Assessment of Pharmaceuticals in the Environment – aims to develop screening tools for identifying the environmental risks both earlier on in drug development and for older medicines."
                }
            },
            "Bank of America Corp": {
                "companyName": "Bank of America Corp",
                "nickName": "Bank of America",
                "exchange": "NYSE",
                "ticker": "BAC",
                "url": "https://www.bankofamerica.com",
                "Life Below Water": {
                    "rank": "6",
                    "story": "Bank of America has partnered with multiple organizations to provide a safer water ecosystem in the world."
                }
            },
            "Barclays PLC (ADR)": {
                "companyName": "Barclays PLC (ADR)",
                "nickName": "Barclays",
                "exchange": "NYSE",
                "ticker": "BCS",
                "url": "https://www.barclays.com/",
                "Quality Education": {
                    "rank": "4",
                    "story": "Barclays, in collaboration with Action for Children, developed the Barclays Money Toolkit to help adults and children learn about financial planning and saving. The toolkit provides guidance on identifying ways of improving participants’ financial situations; learning about financial products and language in order to make educated choices, and building on participants’ existing skills and applying them to finances."
                },
                "Reduced Inequalities": {
                    "rank": "10",
                    "story": "Barclays Bank which in 2007 made the commitment to exceed the London Living Wage for both employees and contracted staff, reducing absenteeism and employee turnover from 30% to 4%, while increasing performance and satisfacton levels."
                }
            },
            "BHP Billiton plc (ADR)": {
                "companyName": "BHP Billiton plc (ADR)",
                "nickName": "BHP Billiton",
                "exchange": "NYSE",
                "ticker": "BBL",
                "url": "www.bhp.com/",
                "Reduced Inequalities": {
                    "rank": "2",
                    "story": "BHP Billiton awarded over US$73 million in Western Australian Iron Ore Indigenous Business Contracts during 2015, assigning over US$400 million in contracts over the past three years. Indigenous contracting is built into many of the mining majors’ Reconciliation Action Plans and indigenous engagement strategies. The company requires contractors to have a certain level of capacity and, with many indigenous businesses still growing, joint ventures are often the best option for indigenous businesses to win high-pro le work and to build their capacity. Additionally, the company has provided over 145 traineeships and apprenticeships during this period and currently employs over 940 people identifying as Aboriginal or Torres Strait Islanders."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "6",
                    "story": "BHP Billiton is committed to the role transparency plays in contributing to the governance of natural resources for the benefit of the governments and citizens of host countries. BHP Billiton has been a member of the EITI since its inception, and it voluntarily goes above minimum industry standards by publically reporting on a range of topics including payment of taxes and royalties, sustainability performance that is independently verified, and climate change portfolio analysis. In addition, the Natural Resources Governance is a Global Signature Program of the BHP Billiton Foundation. Signature projects include a two year US$2.5 million partnership with Transparency International to deliver the ‘Mining for Sustainable Development (Phase 1)’ project and a two year US$2.8 million partnership with the World Bank delivering the ‘From disclosure to development’ project. Through these global partnerships targeting improvements in governance and transparency, BHP Billiton commits, collaborates and joins in the global fight against corruption and the promotion of ethical business conduct."
                }
            },
            "BP plc (ADR)": {
                "companyName": "BP plc (ADR)",
                "nickName": "BP PLC",
                "exchange": "NYSE",
                "ticker": "BP",
                "url": "https://www.bp.com",
                "Climate Action": {
                    "rank": "4",
                    "story": "In June 2015, six major oil companies (including BP) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                },
                "Partnerships for The Goals": {
                    "rank": "4",
                    "story": "The Abu Dhabi Regulation and Supervision Bureau partnered with BP in 2014 to model demands on energy and water resources until 2030. This was done using the newly developed ‘Foreseer’ modeling tool which was developed by the University of Cambridge through BP’s Energy Sustainability Challenge research program. The foreseer tool creates a visualization of natural resource life cycles and their interconnectivity in the context of future demand scenarios, technology improvements and policy choices in a region of interest. The tool will provide Abu Dhabi’s policymakers with valuable insights into the complex relationships between energy, land, and water, and support them in their decision-making processes to facilitate sustainable development."
                }
            },
            "Campbell Soup Company": {
                "companyName": "Campbell Soup Company",
                "nickName": "Campbell Soup",
                "exchange": "NYSE",
                "ticker": "CPB",
                "url": "https://www.campbellsoupcompany.com/",
                "Life on Land": {
                    "rank": "1",
                    "story": "CampbellSoupCompanyhasannounceda collaboration with the EDF to improve water quality and reduce greenhouse gas emissions by optimizing fertilizer use and improving soil conservation in the company’s wheat sourcing areas. To achieve these goals, the company will partner with United Suppliers, a cooperative of locally owned and controlled agricultural retailers, to help deploy the SUSTAIN platform in target areas in 2015, including Nebraska and Ohio."
                }
            },
            "Caterpillar Inc.": {
                "companyName": "Caterpillar Inc.",
                "nickName": "Caterpillar Inc.",
                "exchange": "NYSE",
                "ticker": "CAT",
                "url": "www.caterpillar.com",
                "Life on Land": {
                    "rank": "2",
                    "story": "Caterpillar joined an effort in 2015 to focus on restoring natural infrastructure – the forests, prairies, farmlands, wetlands and coastal landscapes. Natural infrastructure improves resilience to natural disasters like storms and floods, improves water quality and removes carbon from the atmosphere to return it to the soil, where it helps plants grow. Cat® products have supported coal mine restoration projects and restored portions of the Florida Everglades in the United States of America. In November 2015, Caterpillar hosted the first major national summit in the United States of diverse stakeholders who have a part to play in natural infrastructure restoration. The summit brought together leaders from engineering, construction, finance, governments, academia and non-governmental organizations to establish a coordinated effort across these industries to develop and deploy sustainable development solutions. Participants delved into the scientific and business cases for natural infrastructure restoration and brainstormed policies, business models and financing solutions needed to expand the world’s natural infrastructure restoration efforts."
                }
            },
            "Cemex SAB de CV (ADR) ADR": {
                "companyName": "Cemex SAB de CV (ADR) ADR",
                "nickName": "Cemex",
                "exchange": "NYSE",
                "ticker": "CX",
                "url": "www.cemexusa.com/",
                "Industry, Innovation, and Infrastructure": {
                    "rank": "10",
                    "story": "Cemex has created the program Mejoratu Calle to help communities and governments collaborate to improve neighborhoods using its cement products. Through this program, the company provides microloans to community members to help fund the pavement of streets and sidewalks with cement. By combining community contributions with government funding, most projects are completed in 70 weeks, rather than the average of 10 years in low-income neighborhoods. As a result of the program, property values and incomes rise in the communities that Mejora tu Calle serves. Since inception, more than 35,000 microloans have been allocated to finance paving over 400,000 square meters, benefiting more than 7000 low-income families. The program has the potential to expand into 50 major cities in Mexico, and ultimately replicate its process throughout Ltin America."
                },
                "Reduced Inequalities": {
                    "rank": "4",
                    "story": "Cemex provides all its employees around the world with a living wage while protecting their labor rights in a safe and respectful work environment."
                },
                "Sustainable Cities and Communities": {
                    "rank": "8",
                    "story": "Cemex has been running its flagship inclusive business, Patrimonio Hoy, for over a decade. It was founded to provide low-income families with access to affordable housing by providing finance, building materials, technical advice and logistical support, enabling them to build or expand their homes more quickly and efficiently. This is accomplished through a collaborative network of local company distributors and community-based promoters (mainly women trained and empowered through the program). Started in Mexico, Patrimonio Hoy has expanded across more than 100 offices across Latin America from Costa Rica to Columbia, the Dominican Republic, and Nicaragua. By 2015, more than 525,000 families had received support from the program and built homes at one-third of the cost and in one-third of the time, through microcredits exceeding US$300 million."
                }
            },
            "Chubb Ltd": {
                "companyName": "Chubb Ltd",
                "nickName": "Chubb Ltd.",
                "exchange": "NYSE",
                "ticker": "CB",
                "url": "https://www2.chubb.com/",
                "Peace, Justice and Strong Institutions": {
                    "rank": "9",
                    "story": "Ace Group, a subsidiary of Chubb Ltd, and a global insurance company established a ‘Rule of Law Fund’ which provides grants to organizations and initiatives that support rule of law worldwide. The fund targets specific rule of law initiatives such as sponsoring conferences that focus on building frameworks for legal institutions in conflict zones and building pro bono efforts in developing counties."
                }
            },
            "Citigroup Inc": {
                "companyName": "Citigroup Inc",
                "nickName": "Citigroup",
                "exchange": "NYSE",
                "ticker": "C",
                "url": "www.citigroup.com/",
                "Quality Education": {
                    "rank": "1",
                    "story": "Citi is building partnerships with the communities in which it operates to increase financial literacy and access to capital. For example, in Colombia, the Citi Foundation has supported Fundación Capital’s LIFT Initiative to develop an innovative tablet-based financial education system. This provides low-income individuals and their families with personalized tools that help them to build their assets, increase their financial capabilities, and support them as they transition out of poverty. The program has helped 1,000 low-income women who receive Government assistance through conditional cash transfers to become active banking clients with formal savings accounts."
                },
                "Gender Equality": {
                    "rank": "3",
                    "story": "Citi Microfinance, in partnership with the Overseas Private Investment Corporation (OPIC), has provided more than US$365 million to fund 40 micro nance institutions in 22 countries since 2006. This investment has resulted in loans to more than 975,000 small business and individual borrowers, nine in 10 of them women."
                },
                "Affordable and Clean Energy": {
                    "rank": "7",
                    "story": "Citi has pledged to source US$2.5 billion in incremental capital towards Power Africa, a multi-stakeholder partnership that aims to double the number of people who have access to electricity throughout sub-Saharan Africa, thereby adding more than 30,000 megawatts of clean and efficient electricity generation to the grid, increasing access to 60 million new homes and businesses."
                },
                "Decent Work and Economic Growth": {
                    "rank": "10",
                    "story": "Citi co-founded the Better Than Cash Alliance, which is a coalition of public, private and NGO partners working to accelerate the transition to e-payment systems globally to empower people and grow emering economies."
                },
                "Sustainable Cities and Communities": {
                    "rank": "4",
                    "story": "Citi partners with the C40 Cities Climate Leadership Group (a network of the world’s megacities committed to addressing climate change) to provide expert pro bono climate finance research and support to help C40 cities address the sustainable infrastructure financing and implementation needs."
                },
                "Climate Action": {
                    "rank": "9",
                    "story": "Citi has made a 10-year US$100 billion commitment to finance activities that reduce carbon emissions, help communities adapt to climate change and directly finance sustainable infrastructure such as gren housing."
                },
                "All": "gold"
            },
            "Colgate-Palmolive Company": {
                "companyName": "Colgate-Palmolive Company",
                "nickName": "Colgate-Palmolive",
                "exchange": "NYSE",
                "ticker": "CL",
                "url": "https://www.colgatepalmolive.com/",
                "Reduced Inequalities": {
                    "rank": "1",
                    "story": "Colgate-Palmolive has adopted measures to increase access to its products in less developed areas. The company has made products more affordable with smaller sizes, re ll packs and various value options. The company takes the purchasing power of low-income consumers into account to ensure affordability of their products and also strategically balances its offerings of base and premier products depending on the region. The company has developed innovative models of distribution to reach more consumers in rural areas. For example, the company utilizes branded motorcycles to distribute large quantities of products into retail environments in Cameroon. This has led to an increase of 500% in deliveries per week and a 43% increase in sales. The company has also engaged rural shoppers by participating in the village haat, an outdoor weekly market, where many people from rural areas congregate. The company sells its personal care products here in small, affordable packages, increasing levels of personal hygiene among the thousands of residents who visit the haat regularly."
                }
            },
            "Credit Suisse Group AG (ADR)": {
                "companyName": "Credit Suisse Group AG (ADR)",
                "nickName": "Credit Suisse",
                "exchange": "NYSE",
                "ticker": "CS",
                "url": "https://www.credit-suisse.com",
                "Quality Education": {
                    "rank": "10",
                    "story": "In 2008 Credit Suisse launched the first phase of the Global Education Initiative focusing on Millennium Development Goal 2 (access to and quality of education), targeting school-aged children in selected countries. Between 2008 and 2014, the Initiative developed strong partnerships, with programs reaching over 100,000 students in over 400 schools in 38 countries. More than 15,000 teachers were trained in subjects ranging from science, technology, engineering, mathematics, and information technology to child-friendly teaching methodologies. Based on this success, in 2014 Credit Suisse launched a Signature Program within the Initiative focusing on Financial Education for Girls. It aims to reach 100,000 girls and young women with interventions to prepare them for the challenges in life. The Global Citizens Program, an integral part of the Global Education Initiative, increases the impact of funding by enabling suitably qualified employees to share their expertise with local partners."
                }
            },
            "CSX Corporation": {
                "companyName": "CSX Corporation",
                "nickName": "CSX Corp.",
                "exchange": "NASDAQ",
                "ticker": "CSX",
                "url": "https://www.csx.com/",
                "Zero Hunger": {
                    "rank": "5",
                    "story": "CSX, an international transport company, together with a non-profit organization helps local farmers improve food delivery services in order to increase access to fresh and healthy foods to low-income families and individuals in the United States."
                },
                "Good Health and Well-Being": {
                    "rank": "2",
                    "story": "CSX, a U.S. railway, and transport company have partnered with a medical school to develop a robust wellness program for its workers including 24-hour fitness, nutrition coaching, health screening, and distribution of walking/exercise monitors to tackle obesity and sleep apnea. (Research reveals that transportation workers risk shorter lifespans because their working environments often result in lack of movement and poor diet.)"
                }
            },
            "DowDuPont Inc": {
                "companyName": "DowDuPont Inc",
                "nickName": "Dow Chemicals",
                "exchange": "NYSE",
                "ticker": "DWDP",
                "url": "www.dow.com/",
                "Clean Water and Sustainability": {
                    "rank": "8",
                    "story": "Dow Water and Process Solutions, a business unit of The Dow Chemical Company, introduced a wastewater management approach called minimal liquid discharge (MLD) in 2015. MLD was developed based on Dow’s experience with effective and proven water treatment technologies. It is a more cost-effective and sustainable way for companies to improve their water footprint, enabling recovery of up to 95% of liquid discharges at a fraction of the cost of solutions aiming for zero liquid discharge. With MLD, Dow showed that businesses can do what is right for both the bottom line and the environment."
                },
                "Partnerships for The Goals": {
                    "rank": "3",
                    "story": "Dow Chemical Company’s ambitious 2025 Sustainability Goals seek to redefine the role of business in society by helping lead the transition to a sustainable planet and society. The company is committing to leading the development of societal blueprints that facilitate the transition to a sustainable planet and society, as well as to breakthrough innovations that aim to deliver a six-fold net positive impact on sustainable development. Dow is developing six projects to demonstrate advancing a circular economy, and committing to US$1 billion of value through projects that are good for business and good for nature, as the company values ecosystem services in its business decisions. The company aims to increase confidence in the safe use of chemical technology through transparency, dialogue, unprecedented collaboration, research, and its own actions."
                }
            },
            "Eli Lilly And Co": {
                "companyName": "Eli Lilly And Co",
                "nickName": "Eli Lilly",
                "exchange": "NYSE",
                "ticker": "LLY",
                "url": "https://www.lilly.com/",
                "Zero Hunger": {
                    "rank": "1",
                    "story": "Eli Lilly’s animal health division, Elanco, is working to break the cycle of hunger in 100 communities around the world by 2017. By 2015 Elanco had already begun to “break the cycle” in more than 50 communities. Elanco has been developing the tools and technologies that protect animals from infectious disease, reduce the environmental impact of livestock production, enhance animal well-being, and eradicate food-borne illness. These, in turn, enable farmers and producers to provide greater amounts of food safely and sustainably."
                },
                "Good Health and Well-Being": {
                    "rank": "3",
                    "story": "Eli Lilly launched the Eli Lilly Multidrug-Resistant Tuberculosis (MDR-TB) Partnership in 2003 which has become a US$170 million commitment from 2003-2016. Through the Partnership, Eli Lilly has worked with nearly 40 partners to elevate Tuberculosis on the global stage; increase awareness, prevention, diagnosis, and treatment outcomes; ensure access to quality-assured medicines, and fund early drug discovery efforts. Phase I and II accomplishments include Eli Lilly transferring manufacturing technology to seven companies to increase availability of MDR-TB medicines and improve standards of care; launch of the Eli Lilly TB Drug Discovery Initiative; provision of US$20 million in funding for TB drug discovery; strengthened capacity of more than 100,000 healthcare professionals to better recognize, diagnose, and treat MDR-TB, and to provide care and support to people with MDR-TB and their families; distribution of guidelines and toolkits to more than 45,000 hospitals and clinics; and education and establishment of partnerships with more than 350 journalists to increase and improve media coverage of TB and MDR-TB. During Phase III the Partnership is targeting four of the highest- burden MDR-TB countries: China, India, Russia and South Africa. Eli Lilly launched the Eli Lilly non-communicable diseases (NCD) Partnership in 2011 with a commitment of US$ 30 million over five years. Through the partnership, Eli Lilly is collaborating with seven leading health organizations in Brazil, India, Mexico, and South Africa—four countries with high rates of diabetes, and NCDs in general. Together the partners are leveraging their collective expertise and capabilities to develop and evaluate approaches that strengthen the early detection and timely treatment of diabetes—with the goal of sustainably improving patient and health systems outcomes while possibly lowering costs. The Partnership has no direct tie to Eli Lilly’s diabetes products, although it aims to impact health system capacity and patient outcomes, which may impact demand for its products over time."
                },
                "Clean Water and Sustainability": {
                    "rank": "6",
                    "story": "Eli Lilly has introduced a number of initiatives to reduce water consumption. For example, in 2014 after performing a detailed environmental assessment, Eli Lilly launched a streamlined process for manufacturing the active pharmaceutical ingredient in its insulin product in Indianapolis which reduced puri ed water use and process waste generation by 30% per unit of production, without increasing per unit solvent and urea waste volumes. In 2015, Eli Lilly implemented a similar conversion at its plant in Puerto Rico, further reducing Eli Lilly’s global environmental footprint."
                },
                "Affordable and Clean Energy": {
                    "rank": "10",
                    "story": "Eli Lilly uses renewable energy to diversify its energy sources and decrease greenhouse gas emissions. It uses direct generation as well as direct and indirect purchases of renewable energy from local utilities. At five facilities worldwide, Eli Lilly generates electric power using photovoltaic arrays. A 9.95-megawatt solar system, completed in 2014, adjacent to its subsidiary in New Jersey in the United States, covers more than 40 acres and is one of the biggest of its kind for an East Coast non-utility company. The system generated 13.2 million kWh of electrical energy in 2015 and provided 31% of the power needs of he overall site."
                },
                "Life Below Water": {
                    "rank": "5",
                    "story": "Eli Lilly introduced a new water quality goal to reduce absolute phosphorus emissions in wastewater discharge by 15% by 2020, compared to 2014. This addresses an issue that is increasingly important to communities, regulators, and investors. The company believes that significant source reduction will require phasing out and replacing cleaning agents with non-phosphorus based alternatives. Technical teams at Eli Lilly are evaluating existing cleaning processes and will apply learnings to key sites worldwide."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "1",
                    "story": "Eli Lilly’s Bioethics Program is an independent organizational unit reporting to the chief medical officer. Amongst other activities, Eli Lilly instituted a Bioethics Framework for Human Biomedical Research in 2010 to fill the void that existed because most bioethics guidance focused on the responsibilities of clinical investigators and ethics review boards rather than industry sponsors. The Eli Lilly Bioethics Framework consists of four basic principles (respect for persons, beneficence, non-maleficence, and justice) and 13 essential elements for conducting ethical human biomedical research."
                },
                "All": "gold"
            },
            "Enbridge Inc": {
                "companyName": "Enbridge Inc",
                "nickName": "Enbridge",
                "exchange": "NYSE",
                "ticker": "ENB",
                "url": "https://www.enbridge.com/",
                "Gender Equality": {
                    "rank": "1",
                    "story": "Now in its third year, the Enbridge’s Engineering Futures program pairs Aboriginal female high school students with female role models at the company, as part of a partnership between Edmonton Catholic Schools and Enbridge’s FEMINEN (FEMales IN ENgineering) employee resource group. The underlying goal of the Engineering Futures program is to encourage more female high school students to consider science, technology, engineering and mathematics (STEM) career pathways. This mentorship helps Enbridge build and maintain a respectful and welcoming workplace, contributing to its recent selection on the annual list of Canada’s Best Diversity Employers."
                }
            },
            "Eni SpA (ADR)": {
                "companyName": "Eni SpA (ADR)",
                "nickName": "Eni SpA",
                "exchange": "NYSE",
                "ticker": "E",
                "url": "https://www.eni.com/",
                "Affordable and Clean Energy": {
                    "rank": "1",
                    "story": "In Africa Eni develops energy sources not just for export but also for the supply of local populations, providing millions of more people with access to energy. For instance, Eni provides almost all the gas necessary to supply Libyan power plants (more than 5 BCM per year, covering all power needs). In Egypt, where its entire gas production already stays in the country, Eni will help to create the conditions for energy independence, thanks to the development of the new giant discovery of Zohr offshore gas. In sub-Saharan Africa, Eni has invested in power generation using associated gas, which has traditionally been flared. Eni has installed more than 1 GW of electricity capacity in 4 plants in Nigeria and Congo and transmission infrastructures which provide 20% and 60% of these countries respective electricity supply, for an investment of more than US$2 billion. This model will soon be replicated in Angola and Ghana, where Eni has signed an agreement for the development of new projects, as well as in Mozambique."
                },
                "Climate Action": {
                    "rank": "3",
                    "story": "In June 2015, six major oil companies (including Eni) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                },
                "Life Below Water": {
                    "rank": "4",
                    "story": "Eni is developing the CUBE system based on a proprietary and patented technology to respond to unforeseen oil spills at sea. CUBE was designed to be the last line of defense if a blow-out (the uncontrolled spewing of oil from a well) is not intercepted in time with standard emergency systems. A 1:4 scale model has been designed and is made for the collection and separation of gas from water and oil near the wellhead on the sea floor. The prototype, now patented due to a number of innovative solutions, has been subject to successful tank tests with a rate of up to 10,000 bbl/ day of fluid."
                }
            },
            "FedEx Corporation": {
                "companyName": "FedEx Corporation",
                "nickName": "FedEx",
                "exchange": "NYSE",
                "ticker": "FDX",
                "url": "https://www.fedex.com/",
                "Good Health and Well-Being": {
                    "rank": "8",
                    "story": "FedEx collaborated with EMBARQ Mexico to develop a training program manual for Mexico City’s Metrobús drivers. The manual is an amended version of the FedEx Safety First program and is now being replicated in other Mexican cities. Elsewhere, EMBARQ Brazil is developing a pocket safety manual for drivers that will draw on both the FedEx Safety First program and the EMBARQ Mexico training manual."
                },
                "Sustainable Cities and Communities": {
                    "rank": "2",
                    "story": "FedEx, a global logistics company, embarkedon a project with EMBARQ (a think tank) to identify sustainable public transport solutions in cities in Mexico, Brazil, and India. The three-year project reached out to over 1,600 transport officials and drivers, contributing to a reduction of 20,000 tons of carbon dioxide emissions. In addition, the program helped urban transport operators provide enhanced and more efficient services."
                }
            },
            "Fluor Corporation (NEW)": {
                "companyName": "Fluor Corporation (NEW)",
                "nickName": "Fluor Corp.",
                "exchange": "NYSE",
                "ticker": "FLR",
                "url": "www.fluor.com/",
                "Quality Education": {
                    "rank": "8",
                    "story": "Fluor, an international construction firm, runs a vocational training school for unemployed and disadvantaged people in South Africa. Since its inception almost 35 years ago, more than 30,000 people have been trained in marketable trade skills and have secured employment as fitters, welders, electricians, pipe fitters, and other building trades. The training program provides Fluor with access o a diverse talent pipeline."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "8",
                    "story": "Fluor, a global engineering construction company, supports external anti-corruption efforts through collective action. Fluor will not tolerate bribery of any form even if it will lose business or encounter delays because of its refusal to do so. It is a founding member of the World Economic Forum’s Partnering Against Corruption Initiative (PACI), and the Chairman and CEO of Fluor chairs PACI Vanguard which is a community of global CEOs committed to advocating for a stronger anti-corruption agenda. The Chairman and CEO of Fluor has also been the co-chair of the B20 Task Force on Improving Transparency and Anti-Corruption since inception in 2011, and he chairs the workstream on collective action. Fluor has collaborated with several industry-focused initiatives to develop codes of conduct for small-medium enterprises in the engineering and construction industry, as well as training and other projects to improve ethics and compliance in its industry throughout the world."
                }
            },
            "Ford Motor Company": {
                "companyName": "Ford Motor Company",
                "nickName": "Ford Motors",
                "exchange": "NYSE",
                "ticker": "F",
                "url": "https://www.ford.com/",
                "Clean Water and Sustainability": {
                    "rank": "2",
                    "story": "Ford reduced its total global water use by 62% between 2000 and 2014, or more than 10 billion gallons (equivalent to the water used for 1 billion ve-minute showers). It also exceeded its global goal to reduce water use per vehicle by 30%, two years ahead of its 2015 target. It accomplished this by cutting the water it uses in everything from cooling towers, to washing parts, to paint operations. Ford has invested in numerous water- reduction technologies and process improvements. These include membrane biological reactors and reverse-osmosis processes to recycle water from on-site wastewater treatment plants in more arid regions, as well as Minimum Quantity Lubrication which uses a ‘dry-machining’ process to lubricate cutting tools with a very small amount of oil (rather than the conventional “wet-machining” process that required large amounts of metal-working fluids and water to cool and lubricate the tools)."
                },
                "Decent Work and Economic Growth": {
                    "rank": "5",
                    "story": "Ford has implemented a training program to promotes responsible working conditions in its supply chain. The program is based on one-day interactive workshops involving multiple suppliers and is targeted at human resources, health and safety, and legal managers within supplier companies. Each participant is expected to ‘cascade’ relevant training materials to personnel within their own companies and to their own direct suppliers within four months of the workshop. This resulted in the formation of the Automotive Industry Action Group (AIAG), through which car manufacturers from North America, Europe, and Asia have developed common guidance statements on working conditions.Thecompanyestimatesthatits training activity (carried out both unilaterally and in conjunction with the AIAG) has reached over 2,900 supplier representatives – and been ‘cascaded’ to around 25,000 supplier managers, 485,000 workers, and 100,000 sub-tier supplier companies."
                },
                "Reduced Inequalities": {
                    "rank": "6",
                    "story": "Ford launched its supplier diversity development program in 1978 with the goals of supporting minority and women-owned businesses, creating business opportunities for diverse suppliers to grow into pro table enterprises, and further strengthening the Ford supplier network to reflect the company’s workforce and customer base. Ford’s diverse suppliers play an important role in the company’s revitalized and expanding portfolio of high-quality, safe, fuel-efficient products equipped with smart technologies. In 2015, Ford purchased goods and services worth: US$8.2 billion from minority-owned suppliers, US$1.1 billion from veteran-owned companies and US$2.3 billion from women-owned businesses."
                }
            },
            "General Electric Company": {
                "companyName": "General Electric Company",
                "nickName": "General Electric",
                "exchange": "NYSE",
                "ticker": "GE",
                "url": "https://www.ge.com/",
                "Good Health and Well-Being": {
                    "rank": "6",
                    "story": "General Electric’s healthcare business has incubated and spun off a start-up company in India for the first time. GenWorks, launched in February 2015 and headed by former GE Healthcare executives who own a majority stake in the company, is attempting to create an ambitious healthcare distribution network for Tier-2 and Tier-3 towns and cities as part of a push to solve some of the biggest healthcare challenges facing the country. GE Healthcare, which holds a 26% stake in the entity, incubated the idea of GenWorks a little over a year ago inside the company. The company was looking at scaling up its distribution in India, and this startup facilitated the creation of a distribution network far beyond traditional boundaries, helping to solve the challenge of access and affordability of healthcare for the bottom half of India’s population."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "2",
                    "story": "General Electric held a series of meetings with NGOs, business leaders, and government officials with respect to reforms in a Southeast Asian country, with a view to addressing issues regarding fair and open procurement, leadership training, the legal environment for responsible investment, and the rule of law. In addition, the company’s related foundation has sponsored the provision of legal services by the Senior International Lawyers Program to legal institutions in this country and the participation of government officials in international training on infrastructure development and competitiveness at the Lee Kuan Yew School of Public Policy."
                }
            },
            "General Motors Company": {
                "companyName": "General Motors Company",
                "nickName": "General Motors",
                "exchange": "NYSE",
                "ticker": "GM",
                "url": "https://www.gm.com/",
                "Reduced Inequalities": {
                    "rank": "3",
                    "story": "GeneralMotors (GM) has 12 Employee Resource Groups which provide a forum for employees to share common concerns and experiences, gain professional development support and engage in local communities. These Groups include the African Ancestry Network, Asian Indian Affinity Group, Chinese Employee Resource Group, GM Hispanic Initiative Team, Native American Cultural Network, and People With Disabilities. All Employee Resource Groups work towards making GM a workplace of choice, and they provide insights that help GM better understand diverse and emerging consumer markets. Each Employee Resource Group has a business plan tied to talent acquisition, talent development, community outreach and business support."
                },
                "Sustainable Cities and Communities": {
                    "rank": "3",
                    "story": "General Motors launched Maven, a new brand and business model dedicated to car sharing. Maven provides seamless and intuitive mobility access and options in addition to and as an alternative to vehicle ownership. Services are customized to regional customer needs and include city and residential programs. Maven City offers car sharing to anyone with the Maven smartphone app who lives in or visits a city where Maven vehicles are available. Maven+ is the residential offering, open to residents who live in one of the buildings with which Maven has partnered. Maven eliminates the friction points involved with car ownership in city environments. Pricing is simple and transparent and includes insurance and fuel."
                }
            },
            "GlaxoSmithKline plc (ADR)": {
                "companyName": "GlaxoSmithKline plc (ADR)",
                "nickName": "GlaxoSmithKline",
                "exchange": "NYSE",
                "ticker": "GSK",
                "url": "https://www.gsk.com/",
                "Responsible Consumption and Production": {
                    "rank": "1",
                    "story": "GSK works closely with suppliers to investigate ways to reduce their collective environmental impact (around 40% of GSK’s carbon footprint comes from its supply chain). In 2014, GSK collected carbon, water, and waste data from over 200 of its largest materials suppliers, covering over £1 billion of its spending on raw materials used in manufacturing and research and development. More than 500 suppliers have now been asked to share practical ideas about improving energy efficiency and reducing other environmental impacts. This is done through the GSK Supplier Exchange – a private online forum where suppliers can collaborate with each other and GSK to share practical ideas about improving resource usage, saving water and increasing energy efficiency."
                }
            },
            "Gold Fields Limited (ADR)": {
                "companyName": "Gold Fields Limited (ADR)",
                "nickName": "Gold Fields",
                "exchange": "NYSE",
                "ticker": "GFI",
                "url": "https://www.goldfields.com/",
                "Clean Water and Sustainability": {
                    "rank": "4",
                    "story": "In 2014, Gold Fields began a four-year program to improve water quality and access for communities in the direct area of influence of Gold Fields’ Cerro Corona mine in Peru and to promote, in partnership with government, remediation of legacy mining activities (not associated with the Company). The program involves building new potable water systems through the construction of a water pipeline from a well at Cerro Corona, identifying and repairing water leaks in the existing water infrastructure and remediation of environmental liabilities that are contaminating a local stream. As a result of the program,almost90%ofhouseholdsinHualgayoc now have access to sufficient clean running water. Apart from strengthening relationships between Gold Fields, the regulator, and host communities, the remediation of legacy mining sites near Cerro Corona will significantly improve the quality of the water in the El Tingo River, on which communities depend for various uses. This strengthens the company’s social license to operate in a region in which other mining companies have experienced water-related conflict with local communities."
                }
            },
            "Goldcorp Inc. (USA)": {
                "companyName": "Goldcorp Inc. (USA)",
                "nickName": "Goldcorp Inc.",
                "exchange": "NYSE",
                "ticker": "GG",
                "url": "https://www.goldcorp.com/",
                "Responsible Consumption and Production": {
                    "rank": "3",
                    "story": "Goldcorp’sTailingsStewardshipStrategyensures best practices in tailings storage facilities and helps Goldcorp retain a leadership position in mine waste management. All the company’s operating sites underwent tailings risk assessments in 2015. These programs serve to strengthen the company’s social license to operate by establishing standards and consistency and enhancing community acceptance. Tailings stewardship ensures planning, design, construction, operation and closure of tailings storage and water retention facilities will be carried out in a manner such that: structures are physically stable under all anticipated conditions; solids and water are managed within designated areas; facilities meet or exceed regulatory or standard engineering guidelines; facilities are chemically stable so that the quality of any seepage or surface runoff does not endanger human health or the environment; and facilities can be closed in a manner that is compatible with the surrounding land use, and that will have a manageable impact on the environment."
                },
                "Life on Land": {
                    "rank": "3",
                    "story": "GoldCorp’s goal is to develop, operate and close its mining properties in a sustainable manner. Biodiversity factors into plans prior to mine construction, through operations and after closure. Every operation has an environmental closure plan in place, which includes reclamation strategies that will leave healthy, thriving ecosystems with productive, useful land for local communities. In 2015, El Sauzal was the first mine to demonstrate it's successful decommissioning in accordance with the International Cyanide Management Code."
                }
            },
            "Goldman Sachs Group Inc": {
                "companyName": "Goldman Sachs Group Inc",
                "nickName": "Goldman Sachs",
                "exchange": "NYSE",
                "ticker": "GS",
                "url": "www.goldmansachs.com/",
                "Gender Equality": {
                    "rank": "4",
                    "story": "Goldman Sachs Group founded the ‘10,000 Women’ program in 2008 which aims to provide educational opportunities in business and management to women, mostly from developing countries, through the creation of partnerships with women’s development organizations. Courses include marketing, accounting, and strategic planning. The company has set up partnerships to help women in 14 countries. An independent report of the program in 2014 found that within 18 months of graduating 69% of participants had increased their revenues, 58% had been able to create new jobs at their businesses, and 90% of participants were involved in mentoring other women."
                }
            },
            "Hewlett Packard Enterprise Co": {
                "companyName": "Hewlett Packard Enterprise Co",
                "nickName": "Hewlett Packard",
                "exchange": "NYSE",
                "ticker": "HPE",
                "url": "www.hp.com/",
                "Decent Work and Economic Growth": {
                    "rank": "4",
                    "story": "Hewlett-Packard (HP) expanded its supply chain requirements in 2014, taking major steps toward preventing exploitative labor practices and forced labor. HP was the first IT company to require the direct employment of foreign migrant workers in the company’s supply chain through the HP Supply Chain Foreign Migrant Worker Standard. By insisting on direct employment, the company can better monitor and prevent issues commonly associated with migrant workers, such as retention of passports or personal documentation and worker paid recruitment fees."
                },
                "Industry, Innovation, and Infrastructure": {
                    "rank": "1",
                    "story": "Hewlett-Packard announced its new Blended Reality ecosystem in 2014, including the innovative new personal computing system called Sprout and Multi Jet Fusion, a new commercial 3D printer technology. This breakthrough has the potential to accelerate the adoption of 3D design and hardware innovation, which could contribute to a digital transformation of manufacturing and help to enable the circular economy. This disruptive technology may improve materials efficiency by streamlining the prototyping process, improving the economics of short-run manufacturing, and avoiding waste associated with mass production. It also enables superior designs that are feasible only using “additive manufacturing” techniques. By making it possible to produce individual replacement parts locally, rapidly, and inexpensively, 3D printing can extend the lifespan of some products. 3D printing may also increase the recyclability and value of product materials at the end of life by reducing the number of material types used in manufacturing."
                },
                "Reduced Inequalities": {
                    "rank": "5",
                    "story": "Hewlett-Packard (HP) has achieved a greater than 85% (or Level 2) level of compliance with South Africa’s Department of Trade and Industry’s Broad-Based Black Economic Empowerment (BBBEE) Codes of Good Practice. It has established the HP Business Institute which supports the development of small and medium enterprises (SME) in the IT sector in South Africa. In addition, the HP Business Institute facilitates courses to develop the skills of existing SME employees and recent graduates pursuing careers in the IT sector, as well as training of existing employees placed in short-term skills programs. HP is also actively recruiting Historically Disadvantaged South Africans so that the composition of HP South Africa staff resembles the demographics of the country, offering capacity building in the form of IT education within the greater community and ensuring that a significant amount of procurement is from BBBEE companies."
                }
            },
            "HSBC Holdings plc (ADR)": {
                "companyName": "HSBC Holdings plc (ADR)",
                "nickName": "HSBC",
                "exchange": "NYSE",
                "ticker": "HSBC",
                "url": "https://www.us.hsbc.com",
                "Quality Education": {
                    "rank": "9",
                    "story": "HSBC’s global financial education program, JA More than Money, is targeted at 7 to 11-year-olds, helping them to learn about earning, spending, saving, investing and donating money, as well as educating them about enterprise and potential careers. The program is run in partnership with JA Worldwide, the largest organization dedicated to financial literacy, entrepreneurship and work readiness. More than 6,000 HSBC employees have volunteered for the program since 2008, benefitting more than 379,000 students in 32 countries."
                },
                "Climate Action": {
                    "rank": "6",
                    "story": "HSBC is one of a number of financial institutions that is playing an important role in shaping the fast- developing green bond market. Also, for more than 10 years, HSBC has been working with its business customers to help them understand and manage their environmental and social impact with a focus on certain sectors and themes. HSBC assesses and supports customers using its policies which it regularly reviews and refines. HSBC’s Energy Sector Policy severely restricts the bank’s support for coal-fired power plants, while recognizing that the shift to a low carbon economy will take time and that fossil fuels will be an important part of the global energy mix for the foreseeable future."
                },
                "Life on Land": {
                    "rank": "5",
                    "story": "In 2004, HSBC was one of the first banks to introduce a Forest Land and Forest Products Sector Policy covering environmental, community and climate issues. In 2014, HSBC issued revised Forestry and Agricultural Commodities policies and started to engage its customers in these sectors, offering advice on how they might achieve the new deadlines set by the bank to achieve independent certification of their operations. As a result, HSBC’s customers in Malaysia, Indonesia, mainland China, Taiwan, South Korea, Thailand, Turkey and Mexico decided to have their operations certified. One example is an Indonesian palm oil processing, refining, and export company, where the management sought expert advice from third parties to understand more about certification from the Roundtable on Sustainable Palm Oil (RSPO), which they found was less complex than they had imagined. Two units of the company obtained RSPO certification in June 2014. In February 2015, HSBC was recognized as the leader in the Forest500 ranking of 150 investors’ policies on the sustainability of forest commodity supply chains. HSBC also offers a discounted prepayment export finance product for trade flows of certified sustainable palm oil. The product launched in Singapore and Indonesia in 2014 and in Malaysia in early 2015.The first deal completed on this structured, bespoke financing was for a major palm oil exporter in 2014."
                },
                "Partnerships for The Goals": {
                    "rank": "5",
                    "story": "FedEx, a global logistics company, embarked on a project with EMBARQ (a think tank) to identify sustainable public transport solutions in cities in Mexico, Brazil, and India. The three-year project reached out to over 1,600 transport officials and drivers, contributing to a reduction of 20,000 tons of carbon dioxide emissions. In addition, the program helped urban transport operators provide enhanced and more efficient services."
                },
                "All": "bronze"
            },
            "Intel Corporation": {
                "companyName": "Intel Corporation",
                "nickName": "Intel",
                "exchange": "NASDAQ",
                "ticker": "INTC",
                "url": "https://www.intel.com/",
                "Clean Water and Sustainability": {
                    "rank": "3",
                    "story": "Intel has invested more than US$220 million in water conservation programs at its global facilities since 1998, saving over 48 billion gallons of water. Intel has been able to decrease the amount of water required to create the ultra-pure water used to clean silicon wafers during fabrication. After it uses ultra-pure water to clean wafers, the water is suitable for industrial purposes, irrigation, and many other needs. Intel’s factories are equipped with complex rinse water collection systems, with separate drains for collecting lightly contaminated wastewater for reuse. With this reuse strategy, the company harvests as much water from its manufacturing processes as possible and directs it to equipment such as cooling towers and scrubbers. In addition, at some locations, Intel has arrangements to take back grey water from local municipal water treatment operations for use at its campuses. In 2014, Intel internally recycled approximately 3.9 billion gallons of water, equivalent to about 47% of its total water withdrawals for the year."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "5",
                    "story": "Intel is addressing the privacy, security, and freedom of expression impacts of information and communications technology through accountability, public policy, collaboration, and education. The company’s Privacy by Design and Secure Development Life-cycle processes define actions, deliverables, and checkpoints designed to integrate security and privacy into its products and services to meet product and market expectations. Its development processes include ananalysis of how a product protects against unauthorized access, use, destruction, modification, or disclosure of personal information. As the products and services that Intel offers continue to become more diverse, it tracks and evaluates concerns about how technology products can potentially impact privacy, data security, and human rights—including the possibility that its products may be misused to limit the freedom of expression and human rights of individuals. Intel also advocates for global policies and standards to protect data privacy and security."
                }
            },
            "Interface, Inc.": {
                "companyName": "Interface, Inc.",
                "nickName": "Interface Inc.",
                "exchange": "NASDAQ",
                "ticker": "TILE",
                "url": "www.interface.com/",
                "Life Below Water": {
                    "rank": "2",
                    "story": "Interface, a carpet tile manufacturer, has a carpet tile collection called Net Effect that honors the ocean not only in its aesthetic references but also in a unique and tangible way through a project called Net-WorksTM. Net-Works provides a source of income for small fishing villages in the Philippines while cleaning up their beaches and waters of discarded fishing nets that threaten their livelihood and the very precious double barrier reef off their shore. Discarded fishing nets are collected and sold to Interface’s trusted yarn supplier and partner, Aqua l. Since 2011, Aqua l has been re-purposing waste nylon from discarded fishing nets and other sources, including yarn reclaimed through its ReEntry® program, to provide recycled content nylon for Interface carpet tile."
                }
            },
            "Tata Motors": {
                "companyName": "Tata Motors",
                "nickName": "Jaguar Land Rover",
                "exchange": "NYSE",
                "ticker": "TTM",
                "url": "www.jaguarlandrover.com/",
                "Good Health and Well-Being": {
                    "rank": "7",
                    "story": "JaguarLandRover’sAdvancedResearch Centre is working on a suite of groundbreaking new technologies that aim to prevent future road accidents. In 2014, it began introducing autonomous emergency braking systems across its whole model range. Using stereo cameras located above the rear-view mirror, the system helps to identify an imminent risk of colliding with another vehicle – avoiding or reducing the severity of the impact. Research projects include 360o Urban Windscreen which uses transparent roof pillars (and cameras outside the vehicle) to give the driver a 360o view outside the vehicle so that pedestrians, cyclists, and other vehicles are visible, even in blind spots."
                },
                "Quality Education": {
                    "rank": "6",
                    "story": "Jaguar Land Rover’s ‘InspiringTomorrow’s Engineers’ program promotes learning and engagement in STEM subjects in collaboration with schools and colleges to inspire young people to consider engineering and manufacturing careers. Over 2.5 million young people have participated in the program which comprises three main elements: \n(i) School STEM Team Challenges (including Rover 4x4 in Schools, Jaguar Maths in Motion and Jaguar Primary School Challenge) which bring science and technology subjects to life, providing pupils in 11 countries with hands-on projects that enable them to explore different aspects of the automotive industry in a stimulating and exciting way.  In addition to raising awareness about engineering and automotive technologies, the projects also help young people develop communication, team-work, project management and ICT skills.\n(ii) EducationBusinessPartnershipCentreswhich manage school visits and work placements at the company’s UK sites.\n(iii) Careersoutreachactivitieswherethecompany engages with young people, teachers and parents outside its plants to help inform career choices."
                },
                "Affordable and Clean Energy": {
                    "rank": "9",
                    "story": "In 2014, Jaguar Land Rover opened a new Engine Manufacturing Centre in the UK with a roof-mounted solar array which at the time of construction was the largest privately owned array in Britain. The building has 22,622 panels (6.2MWp) which are designed to supply 30% of the site’s energy needs (equivalent to the energy required to power 1,600 homes), thereby reducing the plant’s CO2 footprint by over 2,400 tonnes per year. Jaguar Land Rover is planning to invest £36 million over the three years to 2017 in improving energy performance through an integrated approach of efficiency, process change and renewable energy."
                },
                "Life on Land": {
                    "rank": "10",
                    "story": "Jaguar Land Rover is developing ecology strategies for all its sites, recognizing that early consideration of biodiversity allows for opportunities to effectively manage and, where possible, enhance biodiversity. For example, it is creating an ecological corridor for wildlife across the bottom of its Engine Manufacturing Centre site in the UK to encourage the natural movement of species from one side of the site to the other. It is also installing bat boxes, habitat piles, dead wood stumps and insect houses to encourage small mammals, invertebrates, amphibians, bats and birds to the site"
                },
                "All": "bronze"
            },
            "Johnson and Johnson": {
                "companyName": "Johnson and Johnson",
                "nickName": "Johnson and Johnson",
                "exchange": "NYSE",
                "ticker": "JNJ",
                "url": "https://www.jnj.com/",
                "Good Health and Well-Being": {
                    "rank": "4",
                    "story": "Johnson and Johnson launched Janssen Global Public Health (GPH) in early 2014 to unify the company’s commitment to addressing some of the world’s most critical health issues. For instance, Janssen is partnering with Stop TB Partnership’s Global Drug Facility and the U.S. Agency for International Development to facilitate access to its multi-drug resistant tuberculosis compound better, SIRTURO® (bedaquiline), for patients in more than 130 low and middle income countries, and to collaborate for continued evaluation of multi-drug resistant TB treatment regimens with SIRTURO®. In addition, Janssen GPH is collaborating with Harvard Medical School to support research, policy, and advocacy to address pediatric and adult drug-resistant TB treatment. To help treat and prevent HIV in at-risk individuals, Janssen GPH expanded its collaboration with the International Partnership for Microbicides to include worldwide development and commercialization of dapivirine to prevent sexual transmission of HIV in women, strengthened country-level capacity, knowledge and action around the needs of HIV treatment-experienced children through the collaborative New Horizons Advancing Pediatric HIV Care initiative, and reduced the cost of its HIV medicine PREZISTA® (darunavir), including pediatric formulations, by almost 20% for sub- Saharan Africa and least-developed countries."
                },
                "Gender Equality": {
                    "rank": "6",
                    "story": "Johnson and Johnson is tracking health education programs in targeted communities around that world that focus on increasing individual and public understanding of basic health information. One example is Mitra, a mobile health partnership with the Mobile Alliance for Maternal Action, USAID, the UN Foundation, BabyCenter, Johnson and Johnson and ARMMAN, a Mumbai-based NGO. The program sends preventive care voice messages to pregnant women and new mothers twice a week. The messages go directly to their mobile phones in their chosen language and a preferred time slot corresponding to the stage of their pregnancy or the developmental stage of their child. The program plans to reach up to one million new and expectant mothers, promoting positive health behaviors in low-income urban communities across India. This program helps the company fulfill its Healthy Future 2015 enterprise goal while building meaningful connections with new consumers."
                },
                "Responsible Consumption and Production": {
                    "rank": "8",
                    "story": "Sterilmed, a Johnson and Johnson member company, provides a service to reprocess Single Use Devices that have previously been used on a patient and are typically disposed of as medical waste. Sterilmed is an FDA-registered medical device manager, providing an affordable solution for hospitals faced with the challenge of reducing costs without compromising patient care. The company helps customers significantly reduce their environmental footprint by eliminating medical waste that would otherwise end up in land fills or incinerators. Reprocessing helps divert millions of points of medical waste from landfills and incinerators each year."
                },
                "Life Below Water": {
                    "rank": "8",
                    "story": "Johnson and Johnson has developed a Global Aquatic Ingredient AssessmentTM (GAIA) protocol to better understand how its products interact with water environments. GAIA analyzes the impact an ingredient might have in an aquatic environment and the fish and plant life that live there. Ingredients are evaluated against the GAIA criteria and given a score. By calculating how much of an ingredient is used in a product and the score of that ingredient, a product can be given its own score. For products with lower scores, the company works to improve the formulation to reduce any potential impact on aquatic life."
                },
                "Partnerships for The Goals": {
                    "rank": "7",
                    "story": "In 2015, Johnson and Johnson announced an extended agreement with the Yale Open Data Access Project to provide access to its portfolio of medical devices products, setting new industry standards by being the first company to do so. Johnson and Johnson is committed to enhanced transparency and increased engagement with stakeholders."
                },
                "All": "silver"
            },
            "Keurig Green Mountain Inc": {
                "companyName": "Keurig Green Mountain Inc",
                "nickName": "Keurig Green Mountain",
                "exchange": "NASDAQ",
                "ticker": "GMCR",
                "url": "www.keuriggreenmountain.com/",
                "Life Below Water": {
                    "rank": "3",
                    "story": "Employees at a Keurig Green Mountain found a new use for burlap bags in which green coffee beans are transported. These bags used to go to land ll, and now they are used as ground cover to reduce runoff into the nearby coastal inlet. The bags are also used in community gardens for sheet mulching and erosion control. In a nearby wetland restoration project, the sturdy bags were spread around to stop the growth of invasive species"
                }
            },
            "Mylan NV": {
                "companyName": "Mylan NV",
                "nickName": "Mylan",
                "exchange": "NASDAQ",
                "ticker": "MYL",
                "url": "http://www.mylan.com/",
                "Quality Education": {
                    "rank": "7",
                    "story": "In 2014, Mylan signed a multi-year strategic alliance agreement with Walt Disney Parks and Resorts to help increase awareness and education around anaphylaxis, following an increase in life-threatening (severe) allergic reactions in recent years. The agreement includes updated maps in Disney’s domestic theme parks and on its cruise ships, as well as updated signage in the parks that highlight locations with the company’s EpiPen® and EpiPen Jr® Auto-Injectors. Over time, the company plans to introduce a variety of supplemental educational resources. The company also created a Get Schooled in AnaphylaxisTM educational initiative in 2012 to help those in school settings know how to respond when anaphylaxis occurs. Additionally, more than 64,000 schools have participated in the EpiPen4Schools® program which provides free EpiPen® Auto-Injectors to U.S. schools."
                },
                "Affordable and Clean Energy": {
                    "rank": "8",
                    "story": "Mylan uses natural gas, biofuel briquettes and other alternative fuels in many of its manufacturing facilities. Whenever possible, it sends waste from laboratories and manufacturing activities to waste-to-energy facilities or cement kilns that convert it into energy or steam used for heating. Some of Mylan’s sites in India purchase electricity from third-party suppliers that utilize renewable energy, such as solar and wind power. In addition, one of the company’s API plants generates steam from a mixture of coal and rice husks, producing up to 60% of its electricity. Mylan reports that four of its API manufacturing sites were the first in India to have met an internationally recognized benchmark, ISO 50001, for superior performance in managing energy responsibly and its other sites are introducing similar systems so that they too may receive this certification."
                },
                "Sustainable Cities and Communities": {
                    "rank": "10",
                    "story": "Mylan’s leaders decided voluntarily to forge ahead and reduce Volatile Organic Compound (VOC) emissions coming from the company’s Morgantown, West Virginia, plant while U.S. Environmental Protection Agency officials debated in 2010 whether to impose more stringent air-quality standards. Mylan installed regenerative thermal oxidizer technology that year which between 2011 and 2014 eliminated more than 1,000,000 pounds of solvent emissions from the atmosphere. As a result, families, and communities in and around the area are breathing easier. The county’s 8-hour ozone level average from 2011-2013 was 12% lower than its 2005-2007average."
                },
                "Peace, Justice and Strong Institutions": {
                    "rank": "4",
                    "story": "When Mylan’s business went global in 2007, it learned that many manufacturers outside of the United States which were supplying to the United States market were seldom or never inspected by the U.S. Food and Drug Administration. Mylan played a crucial role in shaping landmark U.S. legislation called the Food and Drug Administration Safety and Innovation Act. The law expanded the FDA’s authority and strengthened its ability to safeguard and advance public health. Mylan believes that drug quality around the world is being enhanced by its persistent and creative approach to finding a legislative solution to restore a level playing field in the U.S. and increase FDA inspection rates around the world."
                },
                "Partnerships for The Goals": {
                    "rank": "8",
                    "story": "Mylan’sroleinstemmingthetideofHIV/AIDS goes beyond supplying high quality, affordable anti-retrovirals. The company also works closely with AIDS organizations to shape market policy and with local Governments to determine how to implement HIV treatment guidelines swiftly. Mylan reports that it is the only generic pharmaceutical company working with the Global Fund to Fight AIDS, Tuberculosis, and Malaria on policy matters. As the 2015/17 alternate board member of its Private Sector Delegation, Mylan is advising the Global Fund on how to make sure the impact of its investments is sustainable. In addition, the company’s global scope combined with its deep knowledge of local markets enables it to provide its international AIDS partners with valuable feedback on how their global goals can work in individual countries. Mylan partners with a wide variety of organizations including the Clinton Health Access Initiative; UNITAID; UNICEF; the Bill and Melinda Gates Foundation; Global Fund to Fight Aids, Tuberculosis, and Malaria; the World Health Organization; and the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR)."
                },
                "All": "silver"
            },
            "Nike Inc": {
                "companyName": "Nike Inc",
                "nickName": "Nike",
                "exchange": "NYSE",
                "ticker": "NKE",
                "url": "https://www.nike.com/",
                "Sustainable Cities and Communities": {
                    "rank": "9",
                    "story": "Nike has implemented a global property protection program to reduce the impact of weather-related events on physical assets. The program covers facility location and designing and building key facilities to a very high level of propety protection."
                },
                "Responsible Consumption and Production": {
                    "rank": "2",
                    "story": "Nike has developed a Considered Design line which aims to minimize waste through the design process and uses environmentally preferred materials for its shoes (e.g., knit shoe design)."
                }
            },
            "Novo Nordisk A/S (ADR)": {
                "companyName": "Novo Nordisk A/S (ADR)",
                "nickName": "Novo Nordisk",
                "exchange": "NYSE",
                "ticker": "NVO",
                "url": "www.novonordisk-us.com/",
                "Sustainable Cities and Communities": {
                    "rank": "5",
                    "story": "In 2014, Novo Nordisk AS launched Cities Changing Diabetes – a cross-disciplinary and cross-sector partnership program to identify and address the root causes of the rise of type 2 diabetes in urban areas, and to facilitate implementation of integrated and sustainable solutions in response to the local diabetes challenge. Today, 65% of 415 million people with diabetes live in cities, amounting to nearly 270 million people. By 2040, this is projected to rise to 74%. Based on these facts Novo Nordisk believes that cities are important focal points for developing solutions to tackling diabetes."
                }
            },
            "PepsiCo, Inc.": {
                "companyName": "PepsiCo, Inc.",
                "nickName": "PepsiCo",
                "exchange": "NYSE",
                "ticker": "PEP",
                "url": "http://www.pepsico.com/",
                "Affordable and Clean Energy": {
                    "rank": "5",
                    "story": "PepsiCo owns one of the largest fleets of all-electric delivery trucks, with 280 vehicles. The company also has over 200 compressed natural gas (CNG) vehicles, representing over 20% of their fleet. The company saved over US$3 million in 2014, while also reducing emissions by more than 20%as compared to conventional diesel engines. The company has also purchased new vehicles that double the fuel economy as compared to traditional delivery trucks. Since 2010, the company’s fleet programs have delivered a combined greenhouse gas reduction of 55,000 metric tonnes, while reducing fuel use by nearly 24%."
                },
                "Responsible Consumption and Production": {
                    "rank": "4",
                    "story": "PepsiCo has researched ways in which to package and deliver products to minimize its environmental impact and reduce costs. Through these initiatives, the company has eliminated nearly 110 million pounds of packaging material since 2013, which has reduced its packaging costs by more than $55 million. The company is the only major consumer packaged goods company to incorporate post-consumer recycled content into its plastic, which it has been doing since 2004. The company has also extensively researched ways in which to reduce packaging size and has reduced the seal size on many of its products, resulting in the elimination of over 11 million pounds of flexible film packaging in 2013, equivalent to 6.5 billion 1-ounce-single-serve bags."
                }
            },
            "Pfizer Inc.": {
                "companyName": "Pfizer Inc.",
                "nickName": "Pfizer Inc.",
                "exchange": "NYSE",
                "ticker": "PFE",
                "url": "www.pfizer.com/",
                "Good Health and Well-Being": {
                    "rank": "9",
                    "story": "In 2013, the Pfizer Foundation established a Health Delivery and Social Innovation portfolio to help catalyze and scale potential high impact innovations that aim to improve health for underserved populations in low and middle-income countries. Investments and grants are made with the goal of generating social impact and growing sustainable organizations that support healthcare delivery. An example of this is the StartHealth Program, an initiative by Unitus® Seed Fund, in partnership with Pfizer Inc. and the Pfizer Foundation, Narayana Health, Manipal hospitals, and PATH, targeted towards identifying, mentoring and investing in early-stage healthcare technology startups in India and Southeast Asia. The program identifies promising technologies and combines philanthropic grant funding, for-pro t seed investing and technical assistance to accelerate the pace of development of health-tech startups and help improve health care systems for patients at the base of the pyramid. Pfizer Inc.’sGlobalHealthFellowprogramplaces Pfizer employees in individual, three- to six-month assignments with international development organizations to work together to bring about meaningful and systematic improvements in health service delivery. Fellows transfer their biopharmaceutical and business expertise in ways that promote access, quality and efficiency of health care. Fellows work hand-in-hand with community- based partners to help improve healthcare systems while gaining new perspectives on global health challenges and how the public and private sector can work together to address them. To date, 340,000 hours of skills-based volunteering service have been contributed, with a value of over US$50 million. Assignments have included Pfizer Fellows working with the International AIDS Vaccine Institute and local research centers in South Africa, Kenya and Uganda to strengthen capacity to conduct and monitor AIDS vaccine trials to meet international standars and expand trial activities."
                }
            },
            "Koninklijke Phillips NV (ADR)": {
                "companyName": "Koninklijke Phillips NV (ADR)",
                "nickName": "Phillips",
                "exchange": "NYSE",
                "ticker": "PHG",
                "url": "https://www.philips.com/",
                "Zero Hunger": {
                    "rank": "3",
                    "story": "Royal Philips City Farming Program works with universities and partners to develop indoor commercial farms using LED grow lights. Farming by this method can result in 20-25 harvests a year, with up to 85% less energy usage. Indoor growing systems based on LED lighting can maximize plant photosynthesis while minimizing energy use, for delicious and nutritious vegetables grown sustainably. Growing crops vertically makes it possible to grow more plants per acre than would be possible with an old farm, enabling more harvests per year, with little waste produced, less agricultural run-off and minimal greenhouse gasses because the food is grown where it is consumed."
                },
                "Affordable and Clean Energy": {
                    "rank": "2",
                    "story": "Royal Philips has developed Community Light Centers, which enable social and economic development after dark for communities off the grid throughout Africa. These centers measure 1000 meters squared, and obtain their energy through the use of solar-powered LED lighting technology made by the company. By the end of 2016, the company hopes to open 100 community light centers throughout Africa, along with 30in Latin America, improving living standards and providing surplus energy to enable small business creation. Furthermore, the company has developed LED Lantern Solutions to prevent women and children from inhaling smoke from indoor kerosene lamps and wood fires. The annual costs for these lanterns is a fraction of the average and provide 10 times longer lasting energy."
                },
                "Responsible Consumption and Production": {
                    "rank": "7",
                    "story": "Royal Philips has created a Circular Economy, and Green Operations Program focused on creating sustainable consumption and production patterns. In 2014, the company reused 81% of its industrial waste as a result of recycling. The company recognizes the importance of reusing materials and has also established a Refurbished Systems Program, which results in reduced emissions of CO2, fewer raw materials used, and less energy consumed."
                }
            },
            "Royal Caribbean Cruises Ltd": {
                "companyName": "Royal Caribbean Cruises Ltd",
                "nickName": "Royal Caribbean Cruises",
                "exchange": "NYSE",
                "ticker": "RCL",
                "url": "www.royalcaribbean.com/",
                "Decent Work and Economic Growth": {
                    "rank": "3",
                    "story": "Royal Caribbean Cruises Ltd., in partnership with the Pan-American Development Foundation, supports the development of local artisans’ businesses. Throughout the Caribbean and Latin America, this partnership helps artisans become third-party certified as sustainable vendors. Royal Caribbean Cruises invites the artisans to market their products to customers on their cruise ships, which also enhances the customer experience."
                }
            },
            "Royal Dutch Shell plc (ADR) ADR Class A": {
                "companyName": "Royal Dutch Shell plc (ADR) ADR Class A",
                "nickName": "Royal Dutch Shell",
                "exchange": "NYSE",
                "ticker": "RDS.A",
                "url": "http://www.shell.com/",
                "Climate Action": {
                    "rank": "5",
                    "story": "In June 2015, six major oil companies (including Royal Dutch Shell) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                },
                "Partnerships for The Goals": {
                    "rank": "2",
                    "story": "ToyotaMotorCorporationworkstogetherwith parts suppliers, automotive industry organizations, and other relevant organizations to ensure procurement and usage that are free from conflict minerals originating in the Democratic Republic of the Congo or adjoining countries and from illegal conduct including human rights infringement. The manufacturer conducts a reasonable country of origin inquiry with due diligence for its products."
                }
            },
            "SandP Global Inc": {
                "companyName": "SandP Global Inc",
                "nickName": "SandP Global",
                "exchange": "NYSE",
                "ticker": "SPGI",
                "url": "https://www.spglobal.com/",
                "Clean Water and Sustainability": {
                    "rank": "5",
                    "story": "McGraw Hill Financial’s company Standard and Poors Ratings Services is assisting the work being undertaken by the UN Environment Program’s Natural Capital Declaration and the German Government that analyzes water risk in fixed income analysis."
                }
            },
            "Solarcity Corp": {
                "companyName": "Solarcity Corp",
                "nickName": "SolarCity",
                "exchange": "NASDAQ",
                "ticker": "SCTY",
                "url": "www.solarcity.com/",
                "Industry, Innovation, and Infrastructure": {
                    "rank": "9",
                    "story": "SolarCity is on the cutting edge of solar energy as they attempt to create products that innovate and change the way the way we use infrastrcture efficiently."
                }
            },
            "Starbucks Corporation": {
                "companyName": "Starbucks Corporation",
                "nickName": "Starbucks",
                "exchange": "NASDAQ",
                "ticker": "NASDAQ",
                "url": "https://www.starbucks.com/",
                "Zero Hunger": {
                    "rank": "4",
                    "story": "Starbucks will make a decade of agronomy research available for commercialization in collaboration with the Costa Rican Coffee Institute. This research, combined with the company’s far-reaching blueprint for transparent and sustainable sourcing, bene ts more than a million farmers and workers around the world. By sharing this work with the industry, the company will broaden its impact on the 25 million people across the globe who rely on coffee for their livelihoods."
                },
                "Partnerships for The Goals": {
                    "rank": "6",
                    "story": "Starbucks will make a decade of agronomy research available for commercialization in collaboration with the Costa Rican Coffee Institute. This research, combined with the company’s far-reaching blueprint for transparent and sustainable sourcing, bene ts more than a million farmers and workers around the world. By sharing this work with the industry, the company will broaden its impact on the 25 million people across the globe who rely on coffee for their livelihoods."
                }
            },
            "Statoil ASA(ADR)": {
                "companyName": "Statoil ASA(ADR)",
                "nickName": "Statoil",
                "exchange": "NYSE",
                "ticker": "STO",
                "url": "https://www.statoil.com/",
                "Decent Work and Economic Growth": {
                    "rank": "6",
                    "story": "In the countries where Statoil operates, it is committed to recruiting locally and build local capacity and skills. For example, the company’s Johan Sverdrup oil field will be one of the most important industrial projects in Norway over the next 50 years. It is expected to create significant value to Norwegian society through tax payments, job opportunities and contracts to the industry. By the end of 2015, the value of contracts awarded to Norwegian registered companies was over US$4 billion (NOK 34 billion), representing more than 70% of the allocated contract value. In Tanzania Statoil spentaroundUS$900million(NOK7.6billion)with Tanzanianregisteredcompaniesbetween2010and 2015, of which the majority was with international companies registered in Tanzania. This represented over 75% of the total procurement spend in Tanzania during the period. In Brazil, Statoil achieved 64% local content for its Peregrino field development, which is well above the 35% target commitment it made to the Brazilian government."
                },
                "Climate Action": {
                    "rank": "2",
                    "story": "In June 2015, six major oil companies (including Statoil) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                },
                "Life on Land": {
                    "rank": "4",
                    "story": "Statoil supports research programs to increase knowledge about ecosystems and biodiversity, and collaborates with industry peers to share knowledge and develop tools for biodiversity management. At the company’s Leismer project, Statoil is implementing a mitigation and monitoring program to reduce the effects of its activities on local woodland caribou, which is categorized as a threatened species. After clearing land for its Marcellus project, Statoil worked with the United States Fish and Wildlife Service to offset the impact by purchasing 359 acres of land for endangered bats in perpetuity. Fish and Wildlife Service since adopted this approach as a template for future conservation programs. Finally, at the company’s Dudgeon site, it implemented measures to protect great crested newts, water wolves and other protected species when installing an onshore high voltage cable."
                }
            },
            "Syngenta AG (ADR)": {
                "companyName": "Syngenta AG (ADR)",
                "nickName": "Syngenta",
                "exchange": "NYSE",
                "ticker": "SYT",
                "url": "https://www4.syngenta.com/",
                "Zero Hunger": {
                    "rank": "9",
                    "story": "In Hungary, the combination of record-setting rains and severe droughts had growers looking for ways to protect their soil: too much rain can wash it away – and too little can dry it out making it more susceptible to erosion during heavy winds and precipitation. Conventional tilling techniques can compound these factors and contribute to soil compaction so that water cannot soak into the soil where it is needed. Syngenta’s CONTIVO® system helps growers in Hungary to adopt conservation tillage techniques that leave at least 30% of the previous year’s crop remnants on the surface of the soil before planting. It combines proven conservation tillage practices with innovative seeds technology, suitable equipment and appropriate use of fertilizer and crop protection protocols to protect soil health whie still maintaining high yieds."
                },
                "Life on Land": {
                    "rank": "6",
                    "story": "Syngenta, together with the United Nations Convention to Combat Desertification (UNCCD), has developed the Soil Leadership Academy. The Academy aims to strengthen international policy, decision-making, and frameworks for soil conservation and sustainable land management. It acts as a knowledge broker and is building a network that links research institutes, universities and key decision-makers, offering information and training opportunities to policymakers and land stakeholders worldwide. In 2015, the Academy successfully ran its first policy development simulation exercise on Land Degradation Neutrality for national policymakers at the UNCCD COP 12 in Turkey. Syngenta’s ambition is to bring greater food security in an environmentally sustainable way to an increasingly populous world. The company’s Good Growth Plan (www.goodgrowthplan.com) sets targets focused on boosting resource efficiency, rejuvenating ecosystems and strengthening rural communities."
                }
            },
            "Teck Resources Ltd (USA)": {
                "companyName": "Teck Resources Ltd (USA)",
                "nickName": "Teck Resources",
                "exchange": "NYSE",
                "ticker": "TECK",
                "url": "http://www.teck.com/",
                "Zero Hunger": {
                    "rank": "6",
                    "story": "Teck, one of the world’s largest producers of zinc, supports an innovative crop nutrition project with China’s Ministry of Agriculture and the International Zinc Association to promote sustainable agriculture. Adding zinc to fertilizer has been demonstrated to increase crop output, improve food security and increase the nutritional quality of crops. Nearly 45% of children in China suffer from zinc deficiency and do not get enough nutrients in their diet. By reaching the company’s target of increasing zinc usage in fertilizer by 20,000 tons in 2016, approximately six million children in China will see improved zinc nutrition. This initiative improves food security, nutrition, and sustainable agriculture, in addition to creating a new market for one of Teck’s products."
                },
                "Affordable and Clean Energy": {
                    "rank": "3",
                    "story": "Teck has partnered to develop the Sun Mine solar project, western Canada’s largest solar power facility and the first solar project built on a reclaimed mine site. SunMine is located on Teck’s former Sullivan mine site in Kimberley, British Columbia, once home to the world’s largest lead-zinc-silver mine. Teck provided use of the land and site infrastructure as well as a US$2 million contribution towards SunMine, which uses over 4,000 solar-cell modules mounted on 96 solar trackers that follow sun movement to maximize solar exposure. Participating in SunMine reflects both Teck’s commitment to supporting local communities, even after mining has ceased, and the company’s focus on expanding the use of alternative energy."
                }
            },
            "Tesla Inc": {
                "companyName": "Tesla Inc",
                "nickName": "Tesla Inc.",
                "exchange": "NASDAQ",
                "ticker": "TSLA",
                "url": "https://www.tesla.com/",
                "Affordable and Clean Energy": {
                    "rank": "4",
                    "story": "Tesla's mission to create a more sustainable transportation system has ventured into many facets of transportation. They continue to make strides to make clean energy affordable through decreasing the cost of the cars they produce through innovations such as the Giga Factory."
                },
                "Industry, Innovation, and Infrastructure": {
                    "rank": "3",
                    "story": "Tesla's mission to create a more sustainable transportation system has ventured into many facets of transportation. They continue to make strides to make clean energy affordable through decreasing the cost of the cars they produce through innovations such as the Giga Factory."
                }
            },
            "Teva Pharmaceutical Industries Ltd (ADR) ADR": {
                "companyName": "Teva Pharmaceutical Industries Ltd (ADR) ADR",
                "nickName": "Teva Pharmaceuticals",
                "exchange": "NYSE",
                "ticker": "TEVA",
                "url": "www.tevapharm.com/",
                "Clean Water and Sustainability": {
                    "rank": "1",
                    "story": "Teva Pharmaceutical Industries has several initiatives to reduce water use (through optimizing processes and improving equipment) and reduce waste. For example, the company’s Ulm-Weiler facility in Germany was using a highly complex waste-water treatment plant which was expensive and dif cult to maintain. By identifying opportunities to optimize upstream sections of the plant, the company reduced chemicals and waste, reduced energy used by nearly 50% and created financial savings. In Israel, the company’s Assia site is located in a desert, and it relies heavily on water and electricity for cooling, ventilation, the operation of lab equipment and other necessary actions. By replacing three cooling towers with a closed loop cooling system, Teva reduced water consumption by 59% and electricity consumption by 31%."
                }
            },
            "Total SA (ADR)": {
                "companyName": "Total SA (ADR)",
                "nickName": "Total SA",
                "exchange": "NYSE",
                "ticker": "TOT",
                "url": "www.total.com",
                "Climate Action": {
                    "rank": "7",
                    "story": "In June 2015, six major oil companies (including Total) wrote an open letter to governments and the United Nations saying that they can take faster climate action if governments introduce carbon pricing systems where they do not yet exist at the national or regional levels and eventually link it all up into a global system that puts a proper price on the environmental and economic costs of greenhouse gas emissions. The letter stated \"Our companies are already taking a number of actions to help limit emissions ... For us to do more, we need governments across the world to provide us with clear, stable, long-term, ambitious policy frameworks. We believe that a price on carbon should be a key element of these frameworks.\""
                }
            },
            "Toyota Motor Corp (ADR)": {
                "companyName": "Toyota Motor Corp (ADR)",
                "nickName": "Toyota Motors",
                "exchange": "NYSE",
                "ticker": "TM",
                "url": "https://www.toyota.com/",
                "Peace, Justice and Strong Institutions": {
                    "rank": "10",
                    "story": "Toyota Motor Corporation works together with parts suppliers, automotive industry organizations, and other relevant organizations to ensure procurement and usage that are free from conflict minerals originating in the Democratic Republic of the Congo or adjoining countries and from illegal conduct including human rights infringement. The manufacturer conducts a reasonable country of origin inquiry with due diligence for its products."
                }
            },
            "Tripadvisor Inc Common Stock": {
                "companyName": "Tripadvisor Inc Common Stock",
                "nickName": "TripAdvisor",
                "exchange": "NASDAQ",
                "ticker": "TRIP",
                "url": "https://www.tripadvisor.com/",
                "Partnerships for The Goals": {
                    "rank": "1",
                    "story": "TripAdvisor partners with GlobalGiving to identify and support locally driven non-profits with SDG-focused missions."
                }
            },
            "UBS Group AG": {
                "companyName": "UBS Group AG",
                "nickName": "UBS",
                "exchange": "NYSE",
                "ticker": "UBS",
                "url": "https://www.ubs.com/",
                "Decent Work and Economic Growth": {
                    "rank": "7",
                    "story": "In 2014 UBS launched ‘UBS and Society’ to harness the powerful combination of its global capabilities and its activities in sustainable investing and philanthropy, its environmental and human rights policies, and its community interaction. UBS sees an ever stronger interest among its clients in societal issues, together with a growing desire to use their wealth to help address these issues. UBS guides its clients who want to use their resources to make a positive impact on the individuals, organizations, and communities that need the most without sacrificing returns. One important innovative strategy is impact investing which focuses on investment choices which generate a positive measurable social and environmental impact while achieving financial returns in parallel. One example in which UBS is growing its engagement is the Loans for Growth fund which provides debt capital to specialized SMEs Financing Institutions in frontier and emerging markets thereby fostering economic development, creating jobs and contributing to poverty alleviation."
                },
                "Reduced Inequalities": {
                    "rank": "7",
                    "story": "The UBS Optimus Foundation has a unique relationship with UBS, seeking to use the bank’s access to the world’s wealthiest individuals to unlock and optimize financial support for the needs of the most vulnerable children, helping the bank’s clients achieve the highest social return on their philanthropic investments. (All donations go directly to beneficiaries, with UBS covering all administrative costs of the projects.) Over the past 10 years, this has funded more than 300 programs in over 75 countries. The foundation applies an evidence-based approach towards philanthropy, prioritizing programs that focus on the well-being of children under the age of eight (because evidence indicates the critical importance of interventions during early childhood). The combination of UBS’s core capabilities and its Foundation’s development expertise results in a number of highly innovative projects, such as the development of innovative financing models for philanthropic investments including the first Development Impact Bond in Education with ‘Educate Girls’ in India."
                }
            },
            "Union Pacific Corporation": {
                "companyName": "Union Pacific Corporation",
                "nickName": "Union Pacific",
                "exchange": "NYSE",
                "ticker": "UNP",
                "url": "www.up.com/",
                "Decent Work and Economic Growth": {
                    "rank": "2",
                    "story": "UnionPacific, a U.S railway company, supports diversity across its supply chain including procurement of fuel, engineering services, railroad maintenance and construction materials, rolling stock maintenance and technology. It's spending with diverse suppliers grew an average of 5.7% annually from 2008 to 2015. Further, about 30% of its suppliers reported purchasing goods or services from diverse suppliers in support of the railway company’s supplier diversity initiative."
                }
            },
            "Vale SA (ADR) ADR": {
                "companyName": "Vale SA (ADR) ADR",
                "nickName": "Vale SA",
                "exchange": "NYSE",
                "ticker": "VALE",
                "url": "www.vale.com",
                "Industry, Innovation, and Infrastructure": {
                    "rank": "6",
                    "story": "The Nacala Logistics Corridor will connect the Moatize Coal mine in northern Mozambique by rail to the deep-water port at Nacala. The agreement for the US$4.4 billion project, signed by joint venture partners Vale and Mitsui in 2014, will upgrade existing railway tracks and construct new ones for handling current and future cargo load, estimated at 22 million tons annually. Of this, 18 tons are for coal transport, and 4 are for general cargo and shared use, including from extensive agricultural development in the region that will be made possible through new access to export markets. The railway also passes through landlocked Malawi, connecting it more directly to overseas export markets."
                }
            },
            "Visa Inc": {
                "companyName": "Visa Inc",
                "nickName": "Visa",
                "exchange": "NYSE",
                "ticker": "V",
                "url": "https://usa.visa.com/",
                "Decent Work and Economic Growth": {
                    "rank": "1",
                    "story": "VisaInc co-founded the Better Than Cash Alliance, which is a coalition of public, private and NGO partners working to accelerate the transition to e-payment systems globally to empower people and grow emerging economies."
                }
            },
            "Wal-Mart Stores Inc": {
                "companyName": "Wal-Mart Stores Inc",
                "nickName": "Walmart",
                "exchange": "NYSE",
                "ticker": "WMT",
                "url": "https://www.walmart.com/",
                "Quality Education": {
                    "rank": "2",
                    "story": "Walmart recognizes the importance of STEM education for the creation of a robust talent pipeline for the company in the future. In 2015, the Walmart Innovation Lab sponsored more than 300 students for group lab tours. This outreach also included several tech talks and innovation roadshows for students majoring in computer science and various engineering disciplines at major universities across the country. Walmart continues to support organizations like the STEM Education Coalition, which works to inform federal and state policymakers on the critical role that STEM education plays in U.S. competitiveness."
                },
                "Gender Equality": {
                    "rank": "5",
                    "story": "Walmart launched a dedicated online space to give shoppers the opportunity to buy unique products while supporting small women-owned business around the world. It also launched a global women’s economic empowerment initiative to harness the company’s size and scale to empower women across the supply chain. By 2016 it aims to source $20 billion from women-owned businesses in the US and double international sourcing."
                },
                "Responsible Consumption and Production": {
                    "rank": "10",
                    "story": "Walmart has introduced the Sustainability Leaders shop which identifies products made by companies that have scored as best in class in Walmart’s Sustainability Index. The Sustainability Index is a supplier scorecard program that is the result of years of work with The Sustainability Consortium, an independent, nonpro t organization that collaborates with more than 100 product manufacturers, nonprofits, and academic researchers to create science-based measurementtools."
                }
            },
            "Walt Disney Co": {
                "companyName": "Walt Disney Co",
                "nickName": "Walt Disney Co.",
                "exchange": "NYSE",
                "ticker": "DIS",
                "url": "https://thewaltdisneycompany.com/",
                "Life Below Water": {
                    "rank": "1",
                    "story": "Disney Cruise Line, a cruise company, features advanced wastewater purification systems (AWPS) that utilize natural processes to treat and purify onboard wastewater to levels far exceeding international shipping standards. (A global environmental organization reported that an average cruise ship with 3,000 passengers and crew produces about 21,000 gallons of sewage a day, yet 40% of 162 cruise ships use an outdated technology which does not effectively treat harmful waste from the sewage released to the ocean). Further, Disney Cruise Line uses biodegradable and organic cleaning products wherever possible in order to avoid potentially harmful phosphates and other chemicals associated with traditional cleaners."
                }
            },
            "The Western Union Company": {
                "companyName": "The Western Union Company",
                "nickName": "Western Union",
                "exchange": "NYSE",
                "ticker": "WU",
                "url": "https://www.westernunion.com/",
                "Quality Education": {
                    "rank": "5",
                    "story": "In 2014 The Western Union Company announced the launch of “Apna Sapna,” a financial literacy program created in eight languages for migrant workers in the United Arab Emirates (‘UAE’) to help them develop the awareness and skills to manage their finances and plan for the future. “Apna Sapna,” which in Hindi means “Our Dream,” is endorsed by the UAE Labor Ministry and aims to address the challenges of migrant workers who are often unsure about how to achieve their long-term financial goals."
                }
            },
            "Xerox Corp": {
                "companyName": "Xerox Corp",
                "nickName": "Xerox",
                "exchange": "NYSE",
                "ticker": "XRX",
                "url": "https://www.xerox.com/",
                "Gender Equality": {
                    "rank": "2",
                    "story": "Xerox has introduced the “WilsonRule,” named after the company’s first CEO Joseph Wilson, which will require that women and minorities be among the final pool of qualified candidates for every open management position in the U.S. and among the finalists outside the U.S.A. The company hopes that this rule will help drive diverse representation at all levels of management. This policy was announced at White House Demo Day in 2015 and was referenced by President Obama."
                },
                "Life on Land": {
                    "rank": "9",
                    "story": "Xerox’s 2020 goals include helping to preserve the world’s forests and biodiversity. The company works with its customers, suppliers and other stakeholders to support the development of a sustainable paper cycle through paper sourcing guidelines and environmentally sound paper offerings, as well as through products and services that decrease dependency on paper. The “earth smart” feature, has been integrated into the Xerox global print driver, bringing several resource-saving settings together at the single click of a button. These features, such as duplex (two-sided printing), n-up (multiple pages per sheet), proof print and toner saving modes, make it easier for customers to make responsible print coices."
                }
            }
        },

        // [{
        //     'name': 'Telsa',
        //     'ticker': 'TSLA',
        //     'metal': 'gold',
        //     'number': '01.'
        // }]
        defaults: {
            'goals': [
                {
                    'goalNumber': 'all',
                    'name': 'All',
                    'color': 'rainbow',
                    'description': 'The companies and funds that are devoted to the most Sustainable Development Goals.',
                    'topCompanies': ["MA", "UN", "BAK", "KO", "C", "LLY", "HSBC", "TTM", "JNJ", "MYL"]
                }, {
                    'goalNumber': '01',
                    'name': 'No Poverty',
                    'color': '#eb1c2d',
                    'description': 'End poverty in all its forms everywhere',
                    'topCompanies': ["MA", "BNS", "K", "AON", "UN", "RIO", "BAK", "KO", "FMS", "SNY"]
                }, {
                    'goalNumber': '02',
                    'name': 'Zero Hunger',
                    'color': '#d3a029',
                    'description': 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
                    'topCompanies': ["MA", "BAK", "ABT", "AGU", "CSX", "LLY", "PHG", "NASDAQ", "SYT", "TECK"]
                },
                {
                    'goalNumber': '03',
                    'name': 'Good Health and Well-Being',
                    'color': '#279b48',
                    'description': 'Ensure healthy lives and promote well-being for all at all ages',
                    'topCompanies': ["UN", "SNY", "AZN", "CSX", "LLY", "FDX", "GE", "TTM", "JNJ", "PFE"]
                },
                {
                    'goalNumber': '04',
                    'name': 'Quality Education',
                    'color': '#c31f33',
                    'description': 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
                    'topCompanies': ["MA", "BCS", "C", "CS", "FLR", "HSBC", "TTM", "MYL", "WMT", "WU"]
                },
                {
                    'goalNumber': '05',
                    'name': 'Gender Equality',
                    'color': '#ef402b',
                    'description': 'Achieve gender equality and empower all women and girls',
                    'topCompanies': ["MA", "K", "RIO", "KO", "C", "ENB", "GS", "JNJ", "WMT", "XRX"]
                },
                {
                    'goalNumber': '06',
                    'name': 'Clean Water and Sustainability',
                    'color': '#00aed9',
                    'description': 'Ensure availability and sustainable management of water and sanitation for all',
                    'topCompanies': ["UN", "KO", "ABB", "DWDP", "LLY", "F", "GFI", "INTC", "SPGI", "TEVA"]
                },
                {
                    'goalNumber': '07',
                    'name': 'Affordable and Clean Energy',
                    'color': '#fdb713',
                    'description': 'Ensure access to affordable, reliable, sustainable and modern energy for all',
                    'topCompanies': ["ABB", "C", "LLY", "E", "TTM", "MYL", "PEP", "PHG", "TECK", "TSLA"]
                },
                {
                    'goalNumber': '08',
                    'name': 'Decent Work and Economic Growth',
                    'color': '#8f1838',
                    'description': 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
                    'topCompanies': ["BAK", "KO", "C", "F", "HPE", "RCL", "STO", "UBS", "UNP", "V"]
                },
                {
                    'goalNumber': '09',
                    'name': 'Industry, Innovation, and Infrastructure',
                    'color': '#f36d25',
                    'description': 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
                    'topCompanies': ["UN", "BAK", "AAPL", "MT", "AZN", "CX", "HPE", "SCTY", "TSLA", "VALE"]
                },
                {
                    'goalNumber': '10',
                    'name': 'Reduced Inequalities',
                    'color': '#e11484',
                    'description': 'Reduce inequality within and among countries',
                    'topCompanies': ["UN", "ABT", "BCS", "BBL", "CX", "CL", "F", "GM", "HPE", "UBS"]
                },
                {
                    'goalNumber': '11',
                    'name': 'Sustainable Cities and Communities',
                    'color': '#f99d26',
                    'description': 'Make cities and human settlements inclusive, safe, resilient and sustainable',
                    'topCompanies': ["MA", "KO", "ABB", "CX", "C", "FDX", "GM", "MYL", "NKE", "NVO"]
                },
                {
                    'goalNumber': '12',
                    'name': 'Responsible Consumption and Production',
                    'color': '#cf8d2a',
                    'description': 'Ensure sustainable consumption and production patterns',
                    'topCompanies': ["UN", "KO", "BUD", "GSK", "GG", "JNJ", "NKE", "PEP", "PHG", "WMT"]
                },
                {
                    'goalNumber': '13',
                    'name': 'Climate Action',
                    'color': '#48773e',
                    'description': 'Take urgent action to combat climate change and its impacts* (* Acknowledging that the United Nations Framework Convention on Climate Change is the primary international, intergovernmental forum for negotiating the global response to climate change.)',
                    'topCompanies': ["FMS", "AGU", "BUD", "BP", "C", "E", "HSBC", "RDS.A", "STO", "TOT"]
                },
                {
                    'goalNumber': '14',
                    'name': 'Life Below Water',
                    'color': '#007dbc',
                    'description': 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
                    'topCompanies': ["SNY", "AMZN", "AZN", "BAC", "LLY", "E", "TILE", "JNJ", "GMCR", "DIS"]
                },
                {
                    'goalNumber': '15',
                    'name': 'Life on Land',
                    'color': '#3eb049',
                    'description': 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
                    'topCompanies': ["UN", "ABT", "CPB", "CAT", "GG", "HSBC", "TTM", "STO", "SYT", "XRX"]
                },
                {
                    'goalNumber': '16',
                    'name': 'Peace, Justice and Strong Institutions',
                    'color': '#02558b',
                    'description': 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
                    'topCompanies': ["MA", "KO", "BBL", "CB", "LLY", "FLR", "GE", "INTC", "MYL", "TM"]
                },
                {
                    'goalNumber': '17',
                    'name': 'Partnerships for The Goals',
                    'color': '#183668',
                    'description': 'Strengthen the means of implementation and revitalize the global partnership for sustainable development',
                    'topCompanies': ["KO", "SNY", "BP", "DWDP", "HSBC", "JNJ", "MYL", "RDS.A", "NASDAQ", "TRIP"]
                }
            ]
        },

        getSDG: function (sdgNumber) {
            var sdg;
            _.each(this.defaults.goals, function (goal) {
                if (goal.goalNumber == sdgNumber) {
                    sdg = goal;
                }
            });

            return sdg;
        },

        getTopCompanies: function (sdgNum) {
            var stg = this.getSDG(sdgNum);
            if (!stg) {
                return false;
            }
            var stgName = stg.name;
            var topCompanyTickers = stg.topCompanies;

            var topCompanies = _.filter(this.sdgCompanies.companies, function (company) {
                return _.indexOf(topCompanyTickers, company.ticker) >= 0;
            });

            topCompanies = this.sortByRank(topCompanies, stgName);

            return topCompanies;
        },

        getTopFunds: function (sdg) {
            return this.getTopCompanies(sdg);
        },

        getSDGs: function () {
            return this.defaults.goals;
        },

        sortByRank: function (topCompanies, sdg) {
            return _.sortBy(topCompanies, function (topCompany) {
                return parseInt(topCompany[sdg].rank, 10);
            });
        }
    });
})();
