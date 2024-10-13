//Types for possible options of castles available for rent
export type CastleOption = 'first-option' | 'second-option' | 'third-option';

//Defines the structure of an abject representing an order for renting a castle
export type OrderData = {  
    id: string;  
    itemType: CastleOption;
    rentStartDate: {seconds: number;},
    rentEndDate: {seconds: number;}
  };
  
  //Function getDay allows to geberate dates dynamically relative to the current date - to set static dates
  export const getDay = (daysForward: number) => {
    const date = new Date(); //date now
    date.setMilliseconds(0); //zero everything for gettig exact midnight time, time point
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setDate(date.getDate() + daysForward); //daysforward for adding days to current date
    return date.getTime() / 1000; //timestamp
  };
  
  //Static data hardcoded on the frontend
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
  
  //Array that stores an example number of castles
  const castleAvailability = {
    'first-option': 2,
    'second-option': 3,
    'third-option': 1,
  };
  
  //Checks the availability of castles based on the selected castle, start date, end date and order list
  export const checkAvailability = (
    selectedCastle: CastleOption | null,
    startDate: Date,
    endDate: Date,
    orders: OrderData[]
  ): boolean => {
    if (!selectedCastle) return false;

    const startTime = startDate.getTime() / 1000; //timestamp in seconds
    const endTime = endDate.getTime() / 1000; //timestamp in seconds
  
    const countUnavailable = orders.filter(order => {
      if (order.itemType !== selectedCastle) return false;
  
      const orderStart = order.rentStartDate.seconds; //Gets the rental start time of the order in seconds
      const orderEnd = order.rentEndDate.seconds; //Gets the order rental end time in seconds
  
      //Checks whethher the limiting date range (startTime to endTime) conflicts with the order date range (orderStart to orderEnd) in three conditions:
      return (
        (startTime >= orderStart && startTime <= orderEnd) || 
        (endTime >= orderStart && endTime <= orderEnd) ||
        (startTime <= orderStart && endTime >= orderEnd)
      );
    }).length; //lenght used for knowing how many orders conflicts with date range limit
  
    //Returns true if the number of conflicting orders (countUnavailable) is less than the maximum availability for the selected castle
    return countUnavailable < castleAvailability[selectedCastle];
  };