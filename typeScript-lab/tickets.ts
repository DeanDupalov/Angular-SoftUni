const testData: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
]


function manager(tickets: string[], sortCriteria: string) {

    const sortingIdx = {
        destination: 0,
        price: 1,
        status: 2,

    };

    tickets.sort((a, b) => a.split('|')[sortingIdx[sortCriteria]].localeCompare(b.split('|')[sortingIdx[sortCriteria]]));
    return tickets
}


const result: string[] = manager(testData, 'status')
console.log(result);
