import { it, expect, describe, expectTypeOf, beforeEach, vi } from 'vitest'

import { saveOnLocalStorage, getLocalStorageItem } from './localStorage'


describe('Saving and returning values', () => {
    beforeEach(() => {
        localStorage.clear()
    })
    it('Should save and return string correctly', () => {
        const value = 'value'
        saveOnLocalStorage('key', value)

        const lsItem = getLocalStorageItem('key')
        expectTypeOf(lsItem).toEqualTypeOf<string>()
        expect(lsItem).toBe(value)
    })
    it('Should save and return number correctly', () => {
        const value = 1000000000
        saveOnLocalStorage('key', value)

        const lsItem = getLocalStorageItem('key')
        expectTypeOf(lsItem).toEqualTypeOf<number>()
        expect(lsItem).toBe(value)
    })
    describe('Booleans', () => {
        it('Should correctly save and return boolean true', () => {
            const value = true;
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<boolean>()
            expect(lsItem).toBe(value)
        })
        it('Should correctly save and return boolean false', () => {
            const value = false;
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<boolean>()
            expect(lsItem).toBe(value)
        })

    })
    describe('arrays', () => {
        it('Should save and return shallow array correctly', () => {
            const value = [
                1,
                true,
                'string'
            ]
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<Array>()
            expect(lsItem).toStrictEqual(value)
        })
        it('Should save and return deep array correctly', () => {
            const value = [
                [1, 2, true],
                {a: true, b: 'name'}
            ]
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<Array>()
            expect(lsItem).toStrictEqual(value)
        })

    })
    describe('objects', () => {
        it('Should save and return shallow object correctly', () => {
            const value = {
                a: 1,
                b: 'string',
                c: true
            }
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<object>(value)
            expect(lsItem).toStrictEqual(value)
        })
        it('Should save and return deep object correctly', () => {
            const value = {
                a: {
                    a: 1,
                    b: 'string',
                    c: true
                },
                b: [1, true, 'string']
            }
            saveOnLocalStorage('key', value)

            const lsItem = getLocalStorageItem('key')
            expectTypeOf(lsItem).toEqualTypeOf<object>(value)
            expect(lsItem).toStrictEqual(value)
        })
    })
    
})