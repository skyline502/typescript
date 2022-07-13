let messages;
messages = 'abc'
let endsWithc = (<string>messages).endsWith('c'); //type assertion 1st way, add (<type>var).(built-in)
let alternativeWay = (messages as string).endsWith('c'); //type assertion 2nd way, add (var as type).(built-in)

