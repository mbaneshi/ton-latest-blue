import { toNano } from '@ton/core';
import { WeeklyWinner } from '../wrappers/WeeklyWinner';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const weeklyWinner = provider.open(await WeeklyWinner.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await weeklyWinner.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(weeklyWinner.address);

    console.log('ID', await weeklyWinner.getId());
}
