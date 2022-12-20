import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  response.status(200).json({"message": "Hello there from the API!"});
}
