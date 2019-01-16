expect(companyName).to.equal('Scuber');
expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);
expect(mostProfitableNeighborhood).to.equal('Chelsea');
expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
expect(companyCeo).to.equal('Susan Smith');
expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
