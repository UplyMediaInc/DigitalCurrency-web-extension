
export const mockData = [
  {
    name:'Jan',
    value: 100,
  },
  {
    name:'Feb',
    value: 250
  },
  {
    name:'Mar',
    value: 500,
  },
  {
    name:'Apr',
    value: 770,
  },
  {
    name:'May',
    value: 1250
  },
  {
    name:'June',
    value: 1300
  },
  {
    name:'July',
    value: 950
  },
  {
    name:'Aug',
    value: 720
  },
  {
    name:'Sept',
    value: 800
  },
  {
    name:'Oct',
    value: 760
  },
  {
    name:'Nov',
    value: 900
  },
  {
    name:'Dec',
    value: 1000
  }
]

export const userHoldingsData = [
  {
    id:1,
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    initalValue: 100,
    currentValue: 500,
    amount: .017,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png'
  },
  {
    id:2,
    symbol: 'ETH',
    name: 'Ethereum',
    initalValue:50,
    currentValue: 200,
    amount: .24,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
  },
  {
    id:3,
    symbol: 'USDT',
    name:'Tether',
    initalValue: 300,
    currentValue: 300,
    amount: 300,
    icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
  }
]

export const columns = [
  {
    field:'icon',
    headerName: '',
    width:50,
    editable:true,
    renderCell: (params) => <img src={params.value} height='30' width='30'/>
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 80,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field:'amount',
    headerName: 'Amount',
    width: 110,
    editable:false,
  },
  {
    field:'initalValue',
    headerName: 'Initial Value ($)',
    width: 110,
    editable:false,
  },
  {
    field:'currentValue',
    headerName: 'Current Value ($)',
    width: 130,
    editable:false,
  }
]

export const userWatchlistData = [
  {
    id:1,
    symbol: 'USDC',
    name: 'USD Coin',
    price: 1,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  },
  {
    id:2,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    price: 1,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
  },
  {
    id:3,
    symbol: 'FRAX',
    name: 'Frax',
    price: 1,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png'
  },
]

export const watchlistColumns = [
  {
    field:'icon',
    headerName:'',
    width:50,
    editable:true,
    renderCell: (params) => <img src={params.value} height='30' width='30'/>
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 100,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price ($)',
    width: 100,
    editable:false,
  }
]