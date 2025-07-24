<script lang="ts">
    const list = [
        {
            name: 'André Ferraz',
            description: 'Resident - Bl. 2, Ap. 201',
            lastMessageReceivedAt: '10:02 PM',
            newMessagesCount: 2,
            avatar: 'A',
        },
        {
            name: 'Juliana Costa',
            description: 'Resident - Bl. 1, Ap. 104',
            lastMessageReceivedAt: '8:45 AM',
            newMessagesCount: 0,
            avatar: 'J'
        },
        {
            name: 'Carlos Lima',
            description: 'Resident - Bl. 3, Ap. 307',
            lastMessageReceivedAt: '2:17 PM',
            newMessagesCount: 5,
            avatar: 'C'
        },
        {
            name: 'Renata Oliveira',
            description: 'Resident - Bl. 4, Ap. 402',
            lastMessageReceivedAt: '6:33 PM',
            newMessagesCount: 1,
            avatar: 'R'
        },
        {
            name: 'Felipe Souza',
            description: 'Resident - Bl. 5, Ap. 509',
            lastMessageReceivedAt: '11:20 AM',
            newMessagesCount: 3,
            avatar: 'F'
        },
        {
            name: 'Mariana Duarte',
            description: 'Resident - Bl. 2, Ap. 208',
            lastMessageReceivedAt: '4:55 PM',
            newMessagesCount: 0,
            avatar: 'M'
        }
    ];
</script>

<div class="flex flex-col gap-2">
    <div class="flex gap-2 p-2">
        <input class="grow px-4 rounded-full bg-stone-100 border border-stone-400" type="text" name="search" id="search" placeholder="Procurando alguém?"/>
        <div class="w-[40px] h-[40px] bg-stone-300 rounded-full"></div>
    </div>
    {#each list as item}
        <div class="flex gap-2 p-2">
            <div class="w-[40px] h-[40px] bg-stone-300 rounded-full text-[18px] pt-[6px] text-center"></div>
            <div class="grow flex flex-col justify-around">
                <div class="leading-none font-bold">{item.name}</div>
                <div class="leading-none">{item.description}</div>
            </div>
            <div class="flex flex-col items-end w-[55px]">
                <div class="text-xs w-full text-end">{item.lastMessageReceivedAt}</div>
                <div class="grow flex items-center justify-center">
                    {#if item.newMessagesCount > 0}
                        <div class="w-[20px] h-[20px] bg-blue-400 text-stone-900 rounded-md text-[12px] pt-[1px] text-center">
                            {item.newMessagesCount}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>
