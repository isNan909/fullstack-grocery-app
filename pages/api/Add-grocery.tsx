import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, quantity } = req.body;

  try {
    await prisma.grocery.create({
      data: {
        name,
        quantity,
      },
    });
    res.status(200).json({ message: 'Your data has been saved!' });
  } catch (error) {
    console.log('Failed to add grocery', error);
  }
}
