function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

describe("Vena Suite", function () {
    const fs = require('fs');
    const CSL = require('citeproc');
    //console.log('Reading Stylesheet');
    let stylesheet = fs.readFileSync('v-en-a.csl', 'utf8');
    //console.log('Reading test library');
    let testData = fs.readFileSync('testdata/testData.json', 'utf8');
    let citations = JSON.parse(testData);

    citeprocSys = {
        retrieveLocale: function (lang) {
            //todo get local locale xml file
            let xml = fs.readFileSync('testdata/locales-en-US.xml', 'utf8');
            return xml;
        },

        retrieveItem: function (id) {
            return citations[id];
        }
    };
    const citeproc = new CSL.Engine(citeprocSys, stylesheet);
    let itemIDs = [];
    for (let key in citations) {
        itemIDs.push(key);
    }
    citeproc.updateItems(itemIDs);
    let bibResult = citeproc.makeBibliography();

    // Read expected results line by line from txt file
    let lines = fs.readFileSync('testdata/expectedResults.txt', 'utf8').split("\n");
    for (let count = 0; count < lines.length; count++) {
        it(`Citation ${count}`, function () {
            if (lines[count]) {
                expect(strip(bibResult[1][count])).toEqual(strip(lines[count]));
            }
        });
    }
});
