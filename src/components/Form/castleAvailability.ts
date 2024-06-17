export type OrderData = {  
    id: string;  
    itemType: "first-option" | "second-option" | "third-option"; 
    rentStartDate: {seconds: number;},
    rentEndDate: {seconds: number;}
  };
  
  export type CastleOption = 'first-option' | 'second-option' | 'third-option';
  

  export const getDay = (daysForward: number) => {
    const date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setDate(date.getDate() + daysForward);
    return date.getTime() / 1000;
  };
  

  export const orders: OrderData[] = [
    {
      itemType: 'second-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee571',
      rentStartDate: { seconds: getDay(2) },
      rentEndDate: { seconds: getDay(6) }
    },
    {
      itemType: 'second-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee572',
      rentStartDate: { seconds: getDay(4) },
      rentEndDate: { seconds: getDay(8) }
    },
    {
      itemType: 'first-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee573',
      rentStartDate: { seconds: getDay(5) },
      rentEndDate: { seconds: getDay(15) }
    },
    {
      itemType: 'first-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee573',
      rentStartDate: { seconds: getDay(9) },
      rentEndDate: { seconds: getDay(14) }
    },
    {
      itemType: 'third-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee575',
      rentStartDate: { seconds: getDay(30) },
      rentEndDate: { seconds: getDay(40) }
    },
    {
      itemType: 'third-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee576',
      rentStartDate: { seconds: getDay(5) },
      rentEndDate: { seconds: getDay(12) }
    },
    {
      itemType: 'second-option',
      id: '67eb6ee1-9bdc-4d44-9d23-60a2229ee572',
      rentStartDate: { seconds: getDay(2) },
      rentEndDate: { seconds: getDay(5) }
    }
  ];
  
  const castleAvailability = {
    'first-option': 2,
    'second-option': 3,
    'third-option': 1,
  };
  
  export const checkAvailability = (
    selectedCastle: CastleOption | null,
    startDate: Date,
    endDate: Date,
    orders: OrderData[]
  ): boolean => {
    if (!selectedCastle) return false;

    const startTime = startDate.getTime() / 1000;
    const endTime = endDate.getTime() / 1000;
  
    const countUnavailable = orders.filter(order => {
      if (order.itemType !== selectedCastle) return false;
  
      const orderStart = order.rentStartDate.seconds;
      const orderEnd = order.rentEndDate.seconds;
  
      return (
        (startTime >= orderStart && startTime <= orderEnd) ||
        (endTime >= orderStart && endTime <= orderEnd) ||
        (startTime <= orderStart && endTime >= orderEnd)
      );
    }).length;
  
    return countUnavailable < castleAvailability[selectedCastle];
  };