function convertBigIntToString(obj) {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (typeof newObj[key] === 'bigint') {
      newObj[key] = newObj[key].toString();
    }
  }
  return newObj;
}

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const societes = await prisma.societe.findMany();

    // Convert BigInt fields to strings
    const societesString = societes.map(convertBigIntToString);

    return NextResponse.json(societesString);
  } catch (error) {
    console.error('Error fetching societes:', error);
    return NextResponse.json({ error: 'Failed to fetch societes' }, { status: 500 });
  }
}
