import { TimeFormatter } from '../../../src/{{kebabCase moduleName}}/common/formatter/time.formatter';

describe('TimeFormatter', () => {
    const testDate = new Date('2020-12-31T19:00:00Z');

    describe('dateToLocaleString', () => {
        it('should format date correctly in Peru time zone', () => {
            const formattedDate = TimeFormatter.dateToLocaleString(testDate);
            expect(formattedDate).toBe('2020-12-31');
        });

        it('should return null for null input', () => {
            const formattedDate = TimeFormatter.dateToLocaleString(null);
            expect(formattedDate).toBeNull();
        });
    });

    describe('dateTimeToLocaleString', () => {
        it('should format date and time correctly in Peru time zone', () => {
            const formattedDateTime = TimeFormatter.dateTimeToLocaleString(testDate);
            expect(formattedDateTime).toBe('2020-12-31 14:00:00');
        });

        it('should return null for null input', () => {
            const formattedDateTime = TimeFormatter.dateTimeToLocaleString(null);
            expect(formattedDateTime).toBeNull();
        });
    });
});