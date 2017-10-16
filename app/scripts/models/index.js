/*global OnePebbleApp, Backbone*/

OnePebbleApp.Models = OnePebbleApp.Models || {};

(function () {
    'use strict';

    OnePebbleApp.Models.Index = Backbone.Model.extend({

        initialize: function () {
        },

        url: function () {
            return '/funds/index/';
        },

        sdgs: {
            "No Poverty": ["MA", "BNS", "K", "AON", "UN", "RIO", "BAK", "KO", "FMS", "SNY"],
            "Zero Hunger": ["MA", "BAK", "ABT", "AGU", "CSX", "LLY", "PHG", "NASDAQ", "SYT", "TECK"],
            "Good Health & Well-Being": ["UN", "SNY", "AZN", "CSX", "LLY", "FDX", "GE", "TTM", "JNJ", "PFE"],
            "Quality Education": ["MA", "BCS", "C", "CS", "FLR", "HSBC", "TTM", "MYL", "WMT", "WU"],
            "Gender Equality": ["MA", "K", "RIO", "KO", "C", "ENB", "GS", "JNJ", "WMT", "XRX"],
            "Clean Water & Sustainability": ["UN", "KO", "ABB", "DWDP", "LLY", "F", "GFI", "INTC", "SPGI", "TEVA"],
            "Affordable & Clean Energy": ["ABB", "C", "LLY", "E", "TTM", "MYL", "PEP", "PHG", "TECK", "TSLA"],
            "Decent Work & Economic Growth": ["BAK", "KO", "C", "F", "HPE", "RCL", "STO", "UBS", "UNP", "V"],
            "Industrial Innovation & Infrastructure": ["UN", "BAK", "AAPL", "MT", "AZN", "CX", "HPE", "SCTY", "TSLA", "VALE"],
            "Reduced Inequalities": ["UN", "ABT", "BCS", "BBL", "CX", "CL", "F", "GM", "HPE", "UBS"],
            "Sustainable Cities & Communities": ["MA", "KO", "ABB", "CX", "C", "FDX", "GM", "MYL", "NKE", "NVO"],
            "Responsible Consumption & Production": ["UN", "KO", "BUD", "GSK", "GG", "JNJ", "NKE", "PEP", "PHG", "WMT"],
            "Climate Action": ["FMS", "AGU", "BUD", "BP", "C", "E", "HSBC", "RDS.A", "STO", "TOT"],
            "Life Below Water": ["SNY", "AMZN", "AZN", "BAC", "LLY", "E", "TILE", "JNJ", "GMCR", "DIS"],
            "Life on Land": ["UN", "ABT", "CPB", "CAT", "GG", "HSBC", "TTM", "STO", "SYT", "XRX"],
            "Peace Justice & Strong Institutions": ["MA", "KO", "BBL", "CB", "LLY", "FLR", "GE", "INTC", "MYL", "TM"],
            "Partnerships for The Goals": ["KO", "SNY", "BP", "DWDP", "HSBC", "JNJ", "MYL", "RDS.A", "NASDAQ", "TRIP"],
            "All": ["MA", "UN", "BAK", "KO", "C", "LLY", "HSBC", "TTM", "JNJ", "MYL"]
        },

        sdgCompanies: {
            "companies" : {
                "Mastercard Inc" : {
                    "companyName" : "Mastercard Inc",
                    "nickName" : "MasterCard Inc.",
                    "exchange" : "NYSE",
                    "ticker" : "MA",
                    "url" : "https://www.mastercard.com",
                    "No Poverty" : "1",
                    "Zero Hunger" : "8",
                    "Quality Education" : "3",
                    "Gender Equality" : "9",
                    "Sustainable Cities & Communities" : "6",
                    "Peace Justice & Strong Institutions" : "7",
                    "All" : "Gold"
                },
                "Bank of Nova Scotia" : {
                    "companyName" : "Bank of Nova Scotia",
                    "nickName" : "Scotiabank",
                    "exchange" : "NYSE",
                    "ticker" : "BNS",
                    "url" : "http://www.scotiabank.com/",
                    "No Poverty" : "2"
                },
                "Kellogg Company" : {
                    "companyName" : "Kellogg Company",
                    "nickName" : "Kellogg's",
                    "exchange" : "NYSE",
                    "ticker" : "K",
                    "url" : "http://www.kelloggcompany.com/",
                    "No Poverty" : "3",
                    "Gender Equality" : "7"
                },
                "Aon PLC" : {
                    "companyName" : "Aon PLC",
                    "nickName" : "Aon PLC",
                    "exchange" : "NYSE",
                    "ticker" : "AON",
                    "url" : "http://www.aon.com/",
                    "No Poverty" : "4"
                },
                "Unilever NV (ADR) ADR" : {
                    "companyName" : "Unilever NV (ADR) ADR",
                    "nickName" : "Unilever",
                    "exchange" : "NYSE",
                    "ticker" : "UN",
                    "url" : "https://www.unilever.com/",
                    "No Poverty" : "5",
                    "Good Health & Well-Being" : "1",
                    "Clean Water & Sustainability" : "X",
                    "Industrial Innovation & Infrastructure" : "2",
                    "Reduced Inequalities" : "8",
                    "Responsible Consumption & Production" : "5",
                    "Life on Land" : "7",
                    "All" : "Platinum"
                },
                "Rio Tinto plc" : {
                    "companyName" : "Rio Tinto plc",
                    "nickName" : "Rio Tinto",
                    "exchange" : "NYSE",
                    "ticker" : "RIO",
                    "url" : "http://www.riotinto.com/",
                    "No Poverty" : "6",
                    "Gender Equality" : "8"
                },
                "Braskem SA (ADR) ADR Class A" : {
                    "companyName" : "Braskem SA (ADR) ADR Class A",
                    "nickName" : "Braskem",
                    "exchange" : "NYSE",
                    "ticker" : "BAK",
                    "url" : "https://www.braskem.com",
                    "No Poverty" : "7",
                    "Zero Hunger" : "7",
                    "Decent Work & Economic Growth" : "8",
                    "Industrial Innovation & Infrastructure" : "7",
                    "All" : "Bronze"
                },
                "The Coca-Cola Co" : {
                    "companyName" : "The Coca-Cola Co",
                    "nickName" : "Coca-Cola Co.",
                    "exchange" : "NYSE",
                    "ticker" : "KO",
                    "url" : "http://www.coca-cola.com/",
                    "No Poverty" : "8",
                    "Gender Equality" : "X",
                    "Clean Water & Sustainability" : "9",
                    "Decent Work & Economic Growth" : "9",
                    "Sustainable Cities & Communities" : "1",
                    "Responsible Consumption & Production" : "6",
                    "Peace Justice & Strong Institutions" : "3",
                    "Partnerships for The Goals" : "X",
                    "All" : "Diamond"
                },
                "Fresenius Medical Care AG & Co. (ADR)" : {
                    "companyName" : "Fresenius Medical Care AG & Co. (ADR)",
                    "nickName" : "Fresenius Medical Care",
                    "exchange" : "NYSE",
                    "ticker" : "FMS",
                    "url" : "https://fmcna.com/",
                    "No Poverty" : "9",
                    "Climate Action" : "X"
                },
                "Sanofi SA (ADR)" : {
                    "companyName" : "Sanofi SA (ADR)",
                    "nickName" : "Sanofi",
                    "exchange" : "NYSE",
                    "ticker" : "SNY",
                    "url" : "http://en.sanofi.com/",
                    "No Poverty" : "X",
                    "Good Health & Well-Being" : "5",
                    "Life Below Water" : "X",
                    "Partnerships for The Goals" : "9"
                },
                "ABB Ltd (ADR)" : {
                    "companyName" : "ABB Ltd (ADR)",
                    "nickName" : "ABB Ltd.",
                    "exchange" : "NYSE",
                    "ticker" : "ABB",
                    "url" : "http://new.abb.com/",
                    "Clean Water & Sustainability" : "7",
                    "Affordable & Clean Energy" : "6",
                    "Sustainable Cities & Communities" : "7"
                },
                "Abott Laboratories" : {
                    "companyName" : "Abott Laboratories",
                    "nickName" : "Abott Labs",
                    "exchange" : "NYSE",
                    "ticker" : "ABT",
                    "url" : "www.abbott.com/",
                    "Zero Hunger" : "2",
                    "Reduced Inequalities" : "9",
                    "Life on Land" : "8"
                },
                "Agrium Inc. (USA)" : {
                    "companyName" : "Agrium Inc. (USA)",
                    "nickName" : "Agrium Inc.",
                    "exchange" : "NYSE",
                    "ticker" : "AGU",
                    "url" : "www.agrium.com/",
                    "Zero Hunger" : "X",
                    "Climate Action" : "8"
                },
                "Amazon.com, Inc." : {
                    "companyName" : "Amazon.com, Inc.",
                    "nickName" : "Amazon",
                    "exchange" : "NASDAQ",
                    "ticker" : "AMZN",
                    "url" : "https://www.amazon.com/",
                    "Life Below Water" : "9"
                },
                "Anheauser Busch Inbev NV (ADR)" : {
                    "companyName" : "Anheauser Busch Inbev NV (ADR)",
                    "nickName" : "Anheuser Busch",
                    "exchange" : "NYSE",
                    "ticker" : "BUD",
                    "url" : "www.anheuser-busch.com/",
                    "Responsible Consumption & Production" : "9",
                    "Climate Action" : "1"
                },
                "Apple Inc." : {
                    "companyName" : "Apple Inc.",
                    "nickName" : "Apple",
                    "exchange" : "NASDAQ",
                    "ticker" : "AAPL",
                    "url" : "https://www.apple.com/",
                    "Industrial Innovation & Infrastructure" : "8"
                },
                "ArcelorMittal SA (ADR)" : {
                    "companyName" : "ArcelorMittal SA (ADR)",
                    "nickName" : "ArcelorMittal",
                    "exchange" : "NYSE",
                    "ticker" : "MT",
                    "url" : "corporate.arcelormittal.com/",
                    "Industrial Innovation & Infrastructure" : "5"
                },
                "AstraZeneca plc (ADR)" : {
                    "companyName" : "AstraZeneca plc (ADR)",
                    "nickName" : "AstraZeneca",
                    "exchange" : "NYSE",
                    "ticker" : "AZN",
                    "url" : "https://www.astrazeneca.com/",
                    "Good Health & Well-Being" : "X",
                    "Industrial Innovation & Infrastructure" : "4",
                    "Life Below Water" : "7"
                },
                "Bank of America Corp" : {
                    "companyName" : "Bank of America Corp",
                    "nickName" : "Bank of America",
                    "exchange" : "NYSE",
                    "ticker" : "BAC",
                    "url" : "https://www.bankofamerica.com",
                    "Life Below Water" : "6"
                },
                "Barclays PLC (ADR)" : {
                    "companyName" : "Barclays PLC (ADR)",
                    "nickName" : "Barclays",
                    "exchange" : "NYSE",
                    "ticker" : "BCS",
                    "url" : "https://www.barclays.com/",
                    "Quality Education" : "4",
                    "Reduced Inequalities" : "X"
                },
                "BHP Billiton plc (ADR)" : {
                    "companyName" : "BHP Billiton plc (ADR)",
                    "nickName" : "BHP Billiton",
                    "exchange" : "NYSE",
                    "ticker" : "BBL",
                    "url" : "www.bhp.com/",
                    "Reduced Inequalities" : "2",
                    "Peace Justice & Strong Institutions" : "6"
                },
                "BP plc (ADR)" : {
                    "companyName" : "BP plc (ADR)",
                    "nickName" : "BP PLC",
                    "exchange" : "NYSE",
                    "ticker" : "BP",
                    "url" : "https://www.bp.com",
                    "Climate Action" : "4",
                    "Partnerships for The Goals" : "4"
                },
                "Campbell Soup Company" : {
                    "companyName" : "Campbell Soup Company",
                    "nickName" : "Campbell Soup",
                    "exchange" : "NYSE",
                    "ticker" : "CPB",
                    "url" : "https://www.campbellsoupcompany.com/",
                    "Life on Land" : "1"
                },
                "Caterpillar Inc." : {
                    "companyName" : "Caterpillar Inc.",
                    "nickName" : "Caterpillar Inc.",
                    "exchange" : "NYSE",
                    "ticker" : "CAT",
                    "url" : "www.caterpillar.com",
                    "Life on Land" : "2"
                },
                "Cemex SAB de CV (ADR) ADR" : {
                    "companyName" : "Cemex SAB de CV (ADR) ADR",
                    "nickName" : "Cemex",
                    "exchange" : "NYSE",
                    "ticker" : "CX",
                    "url" : "www.cemexusa.com/",
                    "Industrial Innovation & Infrastructure" : "X",
                    "Reduced Inequalities" : "4",
                    "Sustainable Cities & Communities" : "8"
                },
                "Chubb Ltd" : {
                    "companyName" : "Chubb Ltd",
                    "nickName" : "Chubb Ltd.",
                    "exchange" : "NYSE",
                    "ticker" : "CB",
                    "url" : "https://www2.chubb.com/",
                    "Peace Justice & Strong Institutions" : "9"
                },
                "Citigroup Inc" : {
                    "companyName" : "Citigroup Inc",
                    "nickName" : "Citigroup",
                    "exchange" : "NYSE",
                    "ticker" : "C",
                    "url" : "www.citigroup.com/",
                    "Quality Education" : "1",
                    "Gender Equality" : "3",
                    "Affordable & Clean Energy" : "7",
                    "Decent Work & Economic Growth" : "X",
                    "Sustainable Cities & Communities" : "4",
                    "Climate Action" : "9",
                    "All" : "Gold)"
                },
                "Colgate-Palmolive Company" : {
                    "companyName" : "Colgate-Palmolive Company",
                    "nickName" : "Colgate-Palmolive",
                    "exchange" : "NYSE",
                    "ticker" : "CL",
                    "url" : "https://www.colgatepalmolive.com/",
                    "Reduced Inequalities" : "1"
                },
                "Credit Suisse Group AG (ADR)" : {
                    "companyName" : "Credit Suisse Group AG (ADR)",
                    "nickName" : "Credit Suisse",
                    "exchange" : "NYSE",
                    "ticker" : "CS",
                    "url" : "https://www.credit-suisse.com",
                    "Quality Education" : "X"
                },
                "CSX Corporation" : {
                    "companyName" : "CSX Corporation",
                    "nickName" : "CSX Corp.",
                    "exchange" : "NASDAQ",
                    "ticker" : "CSX",
                    "url" : "https://www.csx.com/",
                    "Zero Hunger" : "5",
                    "Good Health & Well-Being" : "2"
                },
                "DowDuPont Inc" : {
                    "companyName" : "DowDuPont Inc",
                    "nickName" : "Dow Chemicals",
                    "exchange" : "NYSE",
                    "ticker" : "DWDP",
                    "url" : "www.dow.com/",
                    "Clean Water & Sustainability" : "8",
                    "Partnerships for The Goals" : "3"
                },
                "Eli Lilly And Co" : {
                    "companyName" : "Eli Lilly And Co",
                    "nickName" : "Eli Lilly",
                    "exchange" : "NYSE",
                    "ticker" : "LLY",
                    "url" : "https://www.lilly.com/",
                    "Zero Hunger" : "1",
                    "Good Health & Well-Being" : "3",
                    "Clean Water & Sustainability" : "6",
                    "Affordable & Clean Energy" : "X",
                    "Life Below Water" : "5",
                    "Peace Justice & Strong Institutions" : "1",
                    "All" : "Gold"
                },
                "Enbridge Inc" : {
                    "companyName" : "Enbridge Inc",
                    "nickName" : "Enbridge",
                    "exchange" : "NYSE",
                    "ticker" : "ENB",
                    "url" : "https://www.enbridge.com/",
                    "Gender Equality" : "1"
                },
                "Eni SpA (ADR)" : {
                    "companyName" : "Eni SpA (ADR)",
                    "nickName" : "Eni SpA",
                    "exchange" : "NYSE",
                    "ticker" : "E",
                    "url" : "https://www.eni.com/",
                    "Affordable & Clean Energy" : "1",
                    "Climate Action" : "3",
                    "Life Below Water" : "4"
                },
                "FedEx Corporation" : {
                    "companyName" : "FedEx Corporation",
                    "nickName" : "FedEx",
                    "exchange" : "NYSE",
                    "ticker" : "FDX",
                    "url" : "https://www.fedex.com/",
                    "Good Health & Well-Being" : "8",
                    "Sustainable Cities & Communities" : "2"
                },
                "Fluor Corporation (NEW)" : {
                    "companyName" : "Fluor Corporation (NEW)",
                    "nickName" : "Fluor Corp.",
                    "exchange" : "NYSE",
                    "ticker" : "FLR",
                    "url" : "www.fluor.com/",
                    "Quality Education" : "8",
                    "Peace Justice & Strong Institutions" : "8"
                },
                "Ford Motor Company" : {
                    "companyName" : "Ford Motor Company",
                    "nickName" : "Ford Motors",
                    "exchange" : "NYSE",
                    "ticker" : "F",
                    "url" : "https://www.ford.com/",
                    "Clean Water & Sustainability" : "2",
                    "Decent Work & Economic Growth" : "5",
                    "Reduced Inequalities" : "6"
                },
                "General Electric Company" : {
                    "companyName" : "General Electric Company",
                    "nickName" : "General Electric",
                    "exchange" : "NYSE",
                    "ticker" : "GE",
                    "url" : "https://www.ge.com/",
                    "Good Health & Well-Being" : "6",
                    "Peace Justice & Strong Institutions" : "2"
                },
                "General Motors Company" : {
                    "companyName" : "General Motors Company",
                    "nickName" : "General Motors",
                    "exchange" : "NYSE",
                    "ticker" : "GM",
                    "url" : "https://www.gm.com/",
                    "Reduced Inequalities" : "3",
                    "Sustainable Cities & Communities" : "3"
                },
                "GlaxoSmithKline plc (ADR)" : {
                    "companyName" : "GlaxoSmithKline plc (ADR)",
                    "nickName" : "GlaxoSmithKline",
                    "exchange" : "NYSE",
                    "ticker" : "GSK",
                    "url" : "https://www.gsk.com/",
                    "Responsible Consumption & Production" : "1"
                },
                "Gold Fields Limited (ADR)" : {
                    "companyName" : "Gold Fields Limited (ADR)",
                    "nickName" : "Gold Fields",
                    "exchange" : "NYSE",
                    "ticker" : "GFI",
                    "url" : "https://www.goldfields.com/",
                    "Clean Water & Sustainability" : "4"
                },
                "Goldcorp Inc. (USA)" : {
                    "companyName" : "Goldcorp Inc. (USA)",
                    "nickName" : "Goldcorp Inc.",
                    "exchange" : "NYSE",
                    "ticker" : "GG",
                    "url" : "https://www.goldcorp.com/",
                    "Responsible Consumption & Production" : "3",
                    "Life on Land" : "3"
                },
                "Goldman Sachs Group Inc" : {
                    "companyName" : "Goldman Sachs Group Inc",
                    "nickName" : "Goldman Sachs",
                    "exchange" : "NYSE",
                    "ticker" : "GS",
                    "url" : "www.goldmansachs.com/",
                    "Gender Equality" : "4"
                },
                "Hewlett Packard Enterprise Co" : {
                    "companyName" : "Hewlett Packard Enterprise Co",
                    "nickName" : "Hewlett Packard",
                    "exchange" : "NYSE",
                    "ticker" : "HPE",
                    "url" : "www.hp.com/",
                    "Decent Work & Economic Growth" : "4",
                    "Industrial Innovation & Infrastructure" : "1",
                    "Reduced Inequalities" : "5"
                },
                "HSBC Holdings plc (ADR)" : {
                    "companyName" : "HSBC Holdings plc (ADR)",
                    "nickName" : "HSBC",
                    "exchange" : "NYSE",
                    "ticker" : "HSBC",
                    "url" : "https://www.us.hsbc.com",
                    "Quality Education" : "9",
                    "Climate Action" : "6",
                    "Life on Land" : "5",
                    "Partnerships for The Goals" : "5",
                    "All" : "Bronze"
                },
                "Intel Corporation" : {
                    "companyName" : "Intel Corporation",
                    "nickName" : "Intel",
                    "exchange" : "NASDAQ",
                    "ticker" : "INTC",
                    "url" : "https://www.intel.com/",
                    "Clean Water & Sustainability" : "3",
                    "Peace Justice & Strong Institutions" : "5"
                },
                "Interface, Inc." : {
                    "companyName" : "Interface, Inc.",
                    "nickName" : "Interface Inc.",
                    "exchange" : "NASDAQ",
                    "ticker" : "TILE",
                    "url" : "www.interface.com/",
                    "Life Below Water" : "2"
                },
                "Tata Motors" : {
                    "companyName" : "Tata Motors",
                    "nickName" : "Jaguar Land Rover",
                    "exchange" : "NYSE",
                    "ticker" : "TTM",
                    "url" : "www.jaguarlandrover.com/",
                    "Good Health & Well-Being" : "7",
                    "Quality Education" : "6",
                    "Affordable & Clean Energy" : "9",
                    "Life on Land" : "X",
                    "All" : "Bronze"
                },
                "Johnson & Johnson" : {
                    "companyName" : "Johnson & Johnson",
                    "nickName" : "Johnson & Johnson",
                    "exchange" : "NYSE",
                    "ticker" : "JNJ",
                    "url" : "https://www.jnj.com/",
                    "Good Health & Well-Being" : "4",
                    "Gender Equality" : "6",
                    "Responsible Consumption & Production" : "8",
                    "Life Below Water" : "8",
                    "Partnerships for The Goals" : "7",
                    "All" : "Silver"
                },
                "Keurig Green Mountain Inc" : {
                    "companyName" : "Keurig Green Mountain Inc",
                    "nickName" : "Keurig Green Mountain",
                    "exchange" : "NASDAQ",
                    "ticker" : "GMCR",
                    "url" : "www.keuriggreenmountain.com/",
                    "Life Below Water" : "3"
                },
                "Mylan NV" : {
                    "companyName" : "Mylan NV",
                    "nickName" : "Mylan",
                    "exchange" : "NASDAQ",
                    "ticker" : "MYL",
                    "url" : "http://www.mylan.com/",
                    "Quality Education" : "7",
                    "Affordable & Clean Energy" : "8",
                    "Sustainable Cities & Communities" : "X",
                    "Peace Justice & Strong Institutions" : "4",
                    "Partnerships for The Goals" : "8",
                    "All" : "Silver"
                },
                "Nike Inc" : {
                    "companyName" : "Nike Inc",
                    "nickName" : "Nike",
                    "exchange" : "NYSE",
                    "ticker" : "NKE",
                    "url" : "https://www.nike.com/",
                    "Sustainable Cities & Communities" : "9",
                    "Responsible Consumption & Production" : "2"
                },
                "Novo Nordisk A/S (ADR)" : {
                    "companyName" : "Novo Nordisk A/S (ADR)",
                    "nickName" : "Novo Nordisk",
                    "exchange" : "NYSE",
                    "ticker" : "NVO",
                    "url" : "www.novonordisk-us.com/",
                    "Sustainable Cities & Communities" : "5"
                },
                "PepsiCo, Inc." : {
                    "companyName" : "PepsiCo, Inc.",
                    "nickName" : "PepsiCo",
                    "exchange" : "NYSE",
                    "ticker" : "PEP",
                    "url" : "http://www.pepsico.com/",
                    "Affordable & Clean Energy" : "5",
                    "Responsible Consumption & Production" : "4"
                },
                "Pfizer Inc." : {
                    "companyName" : "Pfizer Inc.",
                    "nickName" : "Pfizer Inc.",
                    "exchange" : "NYSE",
                    "ticker" : "PFE",
                    "url" : "www.pfizer.com/",
                    "Good Health & Well-Being" : "9"
                },
                "Koninklijke Phillips NV (ADR)" : {
                    "companyName" : "Koninklijke Phillips NV (ADR)",
                    "nickName" : "Phillips",
                    "exchange" : "NYSE",
                    "ticker" : "PHG",
                    "url" : "https://www.philips.com/",
                    "Zero Hunger" : "3",
                    "Affordable & Clean Energy" : "2",
                    "Responsible Consumption & Production" : "7"
                },
                "Royal Caribbean Cruises Ltd" : {
                    "companyName" : "Royal Caribbean Cruises Ltd",
                    "nickName" : "Royal Caribbean Cruises",
                    "exchange" : "NYSE",
                    "ticker" : "RCL",
                    "url" : "www.royalcaribbean.com/",
                    "Decent Work & Economic Growth" : "3"
                },
                "Royal Dutch Shell plc (ADR) ADR Class A" : {
                    "companyName" : "Royal Dutch Shell plc (ADR) ADR Class A",
                    "nickName" : "Royal Dutch Shell",
                    "exchange" : "NYSE",
                    "ticker" : "RDS.A",
                    "url" : "http://www.shell.com/",
                    "Climate Action" : "5",
                    "Partnerships for The Goals" : "2"
                },
                "S&P Global Inc" : {
                    "companyName" : "S&P Global Inc",
                    "nickName" : "S&P Global",
                    "exchange" : "NYSE",
                    "ticker" : "SPGI",
                    "url" : "https://www.spglobal.com/",
                    "Clean Water & Sustainability" : "5"
                },
                "Solarcity Corp" : {
                    "companyName" : "Solarcity Corp",
                    "nickName" : "SolarCity",
                    "exchange" : "NASDAQ",
                    "ticker" : "SCTY",
                    "url" : "www.solarcity.com/",
                    "Industrial Innovation & Infrastructure" : "9"
                },
                "Starbucks Corporation" : {
                    "companyName" : "Starbucks Corporation",
                    "nickName" : "Starbucks",
                    "exchange" : "NASDAQ",
                    "ticker" : "NASDAQ",
                    "url" : "https://www.starbucks.com/",
                    "Zero Hunger" : "4",
                    "Partnerships for The Goals" : "6"
                },
                "Statoil ASA(ADR)" : {
                    "companyName" : "Statoil ASA(ADR)",
                    "nickName" : "Statoil",
                    "exchange" : "NYSE",
                    "ticker" : "STO",
                    "url" : "https://www.statoil.com/",
                    "Decent Work & Economic Growth" : "6",
                    "Climate Action" : "2",
                    "Life on Land" : "4"
                },
                "Syngenta AG (ADR)" : {
                    "companyName" : "Syngenta AG (ADR)",
                    "nickName" : "Syngenta",
                    "exchange" : "NYSE",
                    "ticker" : "SYT",
                    "url" : "https://www4.syngenta.com/",
                    "Zero Hunger" : "9",
                    "Life on Land" : "6"
                },
                "Teck Resources Ltd (USA)" : {
                    "companyName" : "Teck Resources Ltd (USA)",
                    "nickName" : "Teck Resources",
                    "exchange" : "NYSE",
                    "ticker" : "TECK",
                    "url" : "http://www.teck.com/",
                    "Zero Hunger" : "6",
                    "Affordable & Clean Energy" : "3"
                },
                "Tesla Inc" : {
                    "companyName" : "Tesla Inc",
                    "nickName" : "Tesla Inc.",
                    "exchange" : "NASDAQ",
                    "ticker" : "TSLA",
                    "url" : "https://www.tesla.com/",
                    "Affordable & Clean Energy" : "4",
                    "Industrial Innovation & Infrastructure" : "3"
                },
                "Teva Pharmaceutical Industries Ltd (ADR) ADR" : {
                    "companyName" : "Teva Pharmaceutical Industries Ltd (ADR) ADR",
                    "nickName" : "Teva Pharmaceuticals",
                    "exchange" : "NYSE",
                    "ticker" : "TEVA",
                    "url" : "www.tevapharm.com/",
                    "Clean Water & Sustainability" : "1"
                },
                "Total SA (ADR)" : {
                    "companyName" : "Total SA (ADR)",
                    "nickName" : "Total SA",
                    "exchange" : "NYSE",
                    "ticker" : "TOT",
                    "url" : "www.total.com",
                    "Climate Action" : "7"
                },
                "Toyota Motor Corp (ADR)" : {
                    "companyName" : "Toyota Motor Corp (ADR)",
                    "nickName" : "Toyota Motors",
                    "exchange" : "NYSE",
                    "ticker" : "TM",
                    "url" : "https://www.toyota.com/",
                    "Peace Justice & Strong Institutions" : "X"
                },
                "Tripadvisor Inc Common Stock" : {
                    "companyName" : "Tripadvisor Inc Common Stock",
                    "nickName" : "TripAdvisor",
                    "exchange" : "NASDAQ",
                    "ticker" : "TRIP",
                    "url" : "https://www.tripadvisor.com/",
                    "Partnerships for The Goals" : "1"
                },
                "UBS Group AG" : {
                    "companyName" : "UBS Group AG",
                    "nickName" : "UBS",
                    "exchange" : "NYSE",
                    "ticker" : "UBS",
                    "url" : "https://www.ubs.com/",
                    "Decent Work & Economic Growth" : "7",
                    "Reduced Inequalities" : "7"
                },
                "Union Pacific Corporation" : {
                    "companyName" : "Union Pacific Corporation",
                    "nickName" : "Union Pacific",
                    "exchange" : "NYSE",
                    "ticker" : "UNP",
                    "url" : "www.up.com/",
                    "Decent Work & Economic Growth" : "2"
                },
                "Vale SA (ADR) ADR" : {
                    "companyName" : "Vale SA (ADR) ADR",
                    "nickName" : "Vale SA",
                    "exchange" : "NYSE",
                    "ticker" : "VALE",
                    "url" : "www.vale.com",
                    "Industrial Innovation & Infrastructure" : "6"
                },
                "Visa Inc" : {
                    "companyName" : "Visa Inc",
                    "nickName" : "Visa",
                    "exchange" : "NYSE",
                    "ticker" : "V",
                    "url" : "https://usa.visa.com/",
                    "Decent Work & Economic Growth" : "1"
                },
                "Wal-Mart Stores Inc" : {
                    "companyName" : "Wal-Mart Stores Inc",
                    "nickName" : "Walmart",
                    "exchange" : "NYSE",
                    "ticker" : "WMT",
                    "url" : "https://www.walmart.com/",
                    "Quality Education" : "2",
                    "Gender Equality" : "5",
                    "Responsible Consumption & Production" : "X"
                },
                "Walt Disney Co" : {
                    "companyName" : "Walt Disney Co",
                    "nickName" : "Walt Disney Co.",
                    "exchange" : "NYSE",
                    "ticker" : "DIS",
                    "url" : "https://thewaltdisneycompany.com/",
                    "Life Below Water" : "1"
                },
                "The Western Union Company" : {
                    "companyName" : "The Western Union Company",
                    "nickName" : "Western Union",
                    "exchange" : "NYSE",
                    "ticker" : "WU",
                    "url" : "https://www.westernunion.com/",
                    "Quality Education" : "5"
                },
                "Xerox Corp" : {
                    "companyName" : "Xerox Corp",
                    "nickName" : "Xerox",
                    "exchange" : "NYSE",
                    "ticker" : "XRX",
                    "url" : "https://www.xerox.com/",
                    "Gender Equality" : "2",
                    "Life on Land" : "9"
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
                    'description': 'All Sustainable Development Goals',
                    'topCompanies': ["MA", "UN", "BAK", "KO", "C", "LLY", "HSBC", "TTM", "JNJ", "MYL"]
                }, {
                    'goalNumber': '01',
                    'name': 'No Poverty',
                    'color': '#eb1c2d',
                    'description': 'End poverty in all its forms everywhere',
                    'topCompanies': ["MA", "BNS", "K", "AON", "UN", "RIO", "BAK", "KO", "FMS", "SNY"]
                },{
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
                    'name': 'Clean Water and Sanitation',
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
                    'name': 'Peace and Justice Strong Institutions',
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

        getSDG: function(sdgNumber) {
            var sdg;
            _.each(this.defaults.goals, function(goal) {
                if (goal.goalNumber == sdgNumber) {
                    sdg = goal;
                }
            });

            return sdg;
        },

        getTopCompanies: function(sdgNum) {
            var stg = this.getSDG(sdgNum);
            if (!stg) {
                return false;
            }
            var stgName = stg.name;
            var topCompanyTickers = stg.topCompanies;

            var topCompanies  = _.filter(this.sdgCompanies.companies, function(company) {
                return _.indexOf(topCompanyTickers, company.ticker) >= 0;
            });

            topCompanies = this.sortByRank(topCompanies, stgName);

            return topCompanies;
        },

        getTopFunds: function(sdg) {
            return this.getTopCompanies(sdg);
        },

        getSDGs: function() {
            return this.defaults.goals;
        },

        sortByRank: function(topCompanies, sdg) {
            return _.sortBy(topCompanies, function(topCompany) {
                return topCompany[sdg];
            })
        }
    });
})();
