import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

function convertBigIntToString(obj) {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (typeof newObj[key] === 'bigint') {
      newObj[key] = newObj[key].toString();
    }
  }
  return newObj;
}

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';

  try {
    const societes = await prisma.societe.findMany({
      where: {
        nom_soc: {
          contains: query, // Case-insensitive filtering
        }
      },
      include: {
        interlocuteurs: true,
      },
    });

    const societesString = societes.map(convertBigIntToString);
    return NextResponse.json(societesString);
  } catch (error) {
    console.error('Error fetching societes:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch societes' }), { status: 500 });
  }
}
