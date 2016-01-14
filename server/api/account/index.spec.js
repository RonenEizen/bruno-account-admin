// 'use strict';

// var proxyquire = require('proxyquire').noPreserveCache();

// var accountCtrlStub = {
//   index: 'accountCtrl.index'
// };

// var routerStub = {
//   get: sinon.spy()
// };

// // require the index with our stubbed out modules
// var accountIndex = proxyquire('./index.js', {
//   'express': {
//     Router: function() {
//       return routerStub;
//     }
//   },
//   './account.controller': accountCtrlStub
// });

// describe('Account API Router:', function() {

//   it('should return an express router instance', function() {
//     accountIndex.should.equal(routerStub);
//   });

//   describe('GET /api/accounts', function() {

//     it('should route to account.controller.index', function() {
//       routerStub.get
//         .withArgs('/', 'accountCtrl.index')
//         .should.have.been.calledOnce;
//     });

//   });

// });
