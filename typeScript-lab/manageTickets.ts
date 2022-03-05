function tickets(data: string[], sortCriteria: string) {
    const result: Ticket[] = [];

    class Ticket {
        constructor(public destination: string, public price: number, public status: string) {}

        static compareDestination(a: Ticket, b: Ticket) {
            return a.destination.localeCompare(b.destination);
        }

        static comparePrice(a: Ticket, b: Ticket) {
            return a.price - b.price;
        }

        static compareStatus(a: Ticket, b: Ticket) {
            return a.status.localeCompare(b.status);
        }
    }

    data.forEach((el) => {
        const [destination, price, status] = el.split('|');
        result.push(new Ticket(destination, Number(price), status))
    });

    const criterias = {
        'destination': Ticket.compareDestination,
        'price': Ticket.comparePrice,
        'status': Ticket.compareStatus,

    }

    result.sort(criterias[sortCriteria]);
    return result;
}

// console.log(tickets(
//     ['Philadelphia|4.20|available',
//         'New York City|95.99|available',
//         'New York City|1.99|sold',
//         'Boston|126.20|departed'],
//     'price'
// ))

// console.log(tickets(
//     ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
//
// ))

console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status')
)