import service from './schedule';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';

describe('Testing schedulle servics', () => {
    test('should call get method', async () => {
        const res = await service.getSchedule();
        await waitFor(() => {
            expect(res).toHaveLength(16);
        });
    });
    test('should call get method', async () => {
        const res = await service.getScheduleLogs(12857945);
        await waitFor(() => {
            expect(res).toHaveLength(10);
        });
    });
});