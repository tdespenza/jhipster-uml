'use strict';

const expect = require('chai').expect,
    ClassData = require('../../lib/data/class_data');

describe('ClassData', function () {
  describe('#new', function () {
    describe('when not passing any argument', function () {
      it('does not fail', function () {
        new ClassData();
      });
      it('sets the default values instead', function () {
        var data = new ClassData();
        expect(data.name).to.eq('');
        expect(data.comment).to.eq('');
        expect(data.dto).to.eq('no');
        expect(data.pagination).to.eq('no');
        expect(data.service).to.eq('no');
        expect(data.fields).to.deep.eq([]);
        expect(data.tableName).to.eq('');
      });
    });
    describe('when passing arguments', function () {
      it('sets them', function () {
        var data = new ClassData({
          name: 'Abc',
          comment: '42',
          dto: 'yes',
          pagination: 'always',
          service: 'never',
          fields: [1, 2],
          tableName: 'something'
        });
        expect(data.name).to.eq('Abc');
        expect(data.comment).to.eq('42');
        expect(data.dto).to.eq('yes');
        expect(data.pagination).to.eq('always');
        expect(data.service).to.eq('never');
        expect(data.fields).to.deep.eq([1,2]);
        expect(data.tableName).to.eq('something');
      });
    });
  });
});