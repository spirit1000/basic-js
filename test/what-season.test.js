const getSeason = require('../src/what-season.js');

// Presence requirement

describe('variable presence', () => {
    it('function getSeason exists', () => {
        expect(getSeason).toBeDefined();
    });
});

//Specific requirements

describe('base requirements', () => {
    it('returns proper value', () => {   
        const [ 
            winter, 
            spring, 
            summer, 
            autumn,
        ] = [
            new Date(2019, 11, 22, 23, 45, 11, 500),
            new Date(2018, 4, 17, 11, 27, 4, 321),
            new Date(2017, 6, 11, 23, 45, 11, 500),
            new Date(1994, 8, 26, 3, 0, 11, 500),
        ];
        expect(getSeason(winter)).toBe('winter');
        expect(getSeason(spring)).toBe('spring');
        expect(getSeason(summer)).toBe('summer');
        expect(getSeason(autumn)).toMatch(/autumn|fall/);
    });

    it('returns proper value if date is before 1970', () => {
        const [ 
            winter, 
            spring, 
            summer, 
            autumn,
        ] = [
            new Date(1900, 0, 22, 23, 45, 11, 500),
            new Date(1354, 4, 17, 11, 27, 4, 321),
            new Date(1, 6, 13, 23, 45, 11, 500),
            new Date(22, 8, 22, 3, 0, 11, 500),
        ];
        expect(getSeason(winter)).toBe('winter');
        expect(getSeason(spring)).toBe('spring');
        expect(getSeason(summer)).toBe('summer');
        expect(getSeason(autumn)).toMatch(/autumn|fall/);
    });

    it('returns proper value (month index)', () => {
        const [ 
            winter, 
            spring, 
            summer, 
            autumn,
        ] = [
            new Date(2025, 1, 22, 23, 45, 11, 500),
            new Date(2134, 2, 17, 11, 27, 4, 321),
            new Date(2012, 5, 13, 23, 45, 11, 500),
            new Date(2019, 8, 22, 3, 0, 11, 500),
        ];
        expect(getSeason(winter)).toBe('winter');
        expect(getSeason(spring)).toBe('spring');
        expect(getSeason(summer)).toBe('summer');
        expect(getSeason(autumn)).toMatch(/autumn|fall/);
    });

    it('corretly handles argument absence', () => {
        expect(() => getSeason()).not.toThrow();
        expect(getSeason()).toBe('Unable to determine the time of year!');
    });
});

describe('extended requirements ', () => {   
    it('throws an error on invalid argument', () => {
        expect(() => getSeason('foo')).toThrow(Error);
        expect(() => getSeason({ John: 'Smith' })).toThrow(Error);
        expect(() => getSeason(20192701)).toThrow(Error);
        expect(() => getSeason([2019, '27', 0 + '1'])).toThrow(Error);
        expect(() => getSeason(() => new Date())).toThrow(Error);
    });

    it('throws an error on tricky moment', () => {
        const fakeDate = {
            toString() {
                return Date.prototype.toString.call(new Date());
            }
        };
        Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
        expect(() => getSeason(fakeDate)).toThrow(Error);
    });

    it('throws an error on a very tricky moment', () => {
        const deeperFakeDate = {
            toString() {
                return Date.prototype.toString.call(new Date());
            },
            getMonth() {
                return Date.prototype.getMonth.call(new Date());
            },
            getFullYear() {
                return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
            },
            getDate() {
                return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
            },
            getHours() {
                return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
            },
            getMinutes() {
                return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
            },
            getSeconds() {
                return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
            },
            getMilliseconds() {
                return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
            },
            getDay() {
                return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
            }
        };

        Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

        expect(() => getSeason(deeperFakeDate)).toThrow(Error);
    });
});