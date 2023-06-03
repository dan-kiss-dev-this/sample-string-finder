import { useCounter } from './hookCounter';
import { act, renderHook } from '@testing-library/react';

describe('Increment', () => {
    it('Increments Count by 1', async () => {
        const { result } = renderHook(useCounter)

        act(() => {
            result.current.increment()
        })

        expect(result.current.count).toBe(1)
    })
})