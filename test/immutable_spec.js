import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1
        }

        it('is immutable', () => {
            const state = 42;
            const nextState = increment(state);
            expect(nextState).to.be.equal(43);
            expect(state).to.be.equal(42);
        })
    });

    describe('A List', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie)
        }

        it('is immutable', () => {
            let state = List.of('Transpotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');
            expect(nextState).to.equal(List.of('Transpotting', '28 Days Later', 'Sunshine'));
            expect(state).to.equal(List.of('Transpotting', '28 Days Later'));
        });
    });

    describe('a tree', () => {
        function addMovie(currentState, movie) {
            return currentState.update('movies', movies => movies.push(movie))
        }
        it('is immutable', ()=>{
            const state = Map({
                movies: List.of('Transpotting', '28 Days Later')
            });
            const nextState = addMovie(state, 'Sunshine');
            expect(nextState).to.be.equal(Map({
                movies: List.of('Transpotting', '28 Days Later', 'Sunshine')
            }));
            expect(state).to.be.equal(Map({
                movies: List.of('Transpotting', '28 Days Later')
            }))
        })
    })
})