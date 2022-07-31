import fetch from 'node-fetch';

export async function handler(event, context) {
  try{
    const response = new response('${process.env.INSTAGRAM_KEY}');
    const data     = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
}