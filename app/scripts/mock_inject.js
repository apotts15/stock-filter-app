/*global TrdBoss, $*/
Mock.mock('/doctors', 'get', function (url, type, body) {
    //return
    var data = Mock.mock({
        'array|5': [{
            '_id|+1': 1,
            'email': '@EMAIL',
            'name': '@CNAME',
            'image': '@IMAGE'
        }]
    });
    return data.array;
});

Mock.mock('/funds', 'get', function (url, type, body) {
    //return
    var funds = Mock.mock({
        'array|5': [{
            '_id|+1': 1,
            'email': '@EMAIL',
            'name': '@CNAME',
            'image': '@IMAGE'
        }]
    });
    return data.array;
});


// https://goodbyegunstocks.com/api/fund
var fund_ex = {
    "_id": "iqyKcrXHkDPxxAoBk",
    "allocation": {
        "asset_class": [{
            "kind": "stocks",
            "weight": 0.9936,
            "label": "Stocks"
        }, {
            "kind": "bonds",
            "weight": 0,
            "label": "Bonds"
        }, {
            "kind": "cash",
            "weight": 0.0016,
            "label": "Cash"
        }, {
            "kind": "other",
            "weight": 0.0048,
            "label": "Other"
        }],
        "regional": [{
            "kind": "americas",
            "weight": 0.9753999999999998,
            "label": "Americas"
        }, {
            "kind": "europe",
            "weight": 0.019399999999999994,
            "label": "Europe"
        }, {
            "kind": "asia",
            "weight": 0.005199999999999999,
            "label": "Asia"
        }]
    },
    "asset_class": "stocks",
    "fund_type": "U.S. Mid-Cap Blend",
    "highlights": {
        "real_15yr": 2.53905396566619,
        "gains_3yr": 0.343977730844838,
        "real_5yr": 0.778218384728507,
        "gains_ytd": 0.0777794788872113,
        "gains_15yr": 2.53884153319233,
        "expense_net": 0.0009,
        "yield_1yr": 0.0157195363302234,
        "stddev_5yr": 0.13947522568495,
        "gains_1yr": 0.0326484903477766,
        "gains_6mo": 0.197330263153361,
        "real_3yr": 0.344381166249552,
        "real_ytd": 0.0782646980013117,
        "stddev_3yr": 0.120233420564884,
        "stddev_15yr": 0.17021842382653,
        "real_10yr": 1.26982510781395,
        "stddev_10yr": 0.178937293147266,
        "gains_10yr": 1.26962074077193,
        "gains_5yr": 0.777898190128442,
        "real_1yr": 0.0335787111878456,
        "gains_1mo": 0.0811141720232629,
        "stddev_1yr": 0.150747582151753
    },
    "name": "Vanguard Mid-Cap Index ETF",
    "net_assets": 44030000000,
    "security_classes": [{
        "class_name": "Institutional Class",
        "symbol": "VMCIX"
    },
        {
            "class_name": "Admiral Class",
            "symbol": "VIMAX"
        }, {
            "class_name": "Investor Class",
            "symbol": "VIMSX"
        }, {
            "class_name": "Institutional Plus Class",
            "symbol": "VMCPX"
        }, {
            "class_name": "ETF",
            "symbol": "VO"
        }, {
            "class_name": "Signal Class",
            "symbol": "VMISX"
        }],
    "series_name": "Vanguard Mid-Cap Index Fund",
    "symbol": "VO",
    "canonicalSymbol": "VIMSX",
    "startDate": "1999-01-04T00:00:00.000Z",
    "fundFamily": "Vanguard",
    "inceptionDate": "2004-01-26T00:00:00.000Z",
    "gun": {
        "metrics": {
            "region": "US Stocks",
            "weight": 0.9753999999999998
        },
        "gunWeights": {
            "all": 0,
            "maker": 0,
            "seller": 0
        },
        "analyzedWeights": 0.9898,
        "gunHoldings": [],
        "top5Holdings": [{
            "name": "ROSS STORES INC",
            "symbol": "ROST",
            "weight": 0.0070999999999999995,
            "date": "2015-12-31T00:00:00.000Z",
            "marketValue": 469346000,
            "owner": []
        }, {
            "name": "FISERV INC",
            "symbol": "FISV",
            "weight": 0.0068000000000000005,
            "date": "2015-12-31T00:00:00.000Z",
            "marketValue": 446773000,
            "owner": []
        }, {
            "name": "ELECTRONIC ARTS INC",
            "symbol": "EA",
            "weight": 0.0066,
            "date": "2015-12-31T00:00:00.000Z",
            "marketValue": 433704000,
            "owner": []
        }, {
            "name": "ROPER INDUSTRIES INC",
            "symbol": "ROP",
            "weight": 0.0062,
            "date": "2015-12-31T00:00:00.000Z",
            "marketValue": 408939000,
            "owner": []
        }, {
            "name": "EQUINIX INC",
            "symbol": "EQIX",
            "weight": 0.0060999999999999995,
            "date": "2015-12-31T00:00:00.000Z",
            "marketValue": 398017000,
            "owner": []
        }]
    }
}
