import test from 'node:test';import assert from 'node:assert/strict';import {forecast,money} from '../src/utils/finance.js';
test('arrondit les montants',()=>assert.equal(money(10.555),10.56));
test('classe un objectif réalisable',()=>{const r=forecast({incomes:[350000,350000,350000],expenses:[250000,250000,250000],saved:100000,target:400000,monthsRemaining:3});assert.equal(r.capacity,100000);assert.equal(r.needed,100000);assert.equal(r.status,'realisable');assert.equal(r.estimatedMonths,3)});
test('gère une capacité négative',()=>{const r=forecast({incomes:[100],expenses:[200],saved:0,target:1000,monthsRemaining:4});assert.equal(r.estimatedMonths,null);assert.equal(r.status,'difficile')});
