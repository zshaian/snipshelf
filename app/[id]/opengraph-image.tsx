import { getLanguageColor } from '@/lib';
import { getSnippetInfoMetadata } from '@/services';
import { ImageResponse } from 'next/og';
import programmingLanguages from '@/data/programming-languages.json';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const { id } = params;
  const snippetInfo = await getSnippetInfoMetadata(id);

  return new ImageResponse(
    (
      <div
        style={{
          color: 'white',
          padding: 40,
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flex: '1',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                textTransform: 'capitalize',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              {snippetInfo.title || 'Untitled Snippet'}
            </div>

            <div
              style={{
                marginTop: 16,
                fontSize: 32,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              {snippetInfo.description || 'No Description'}
            </div>

            <div
              style={{
                marginTop: 16,
                fontSize: 32,
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: '50%',
                  backgroundColor: getLanguageColor(
                    snippetInfo.language,
                    programmingLanguages
                  ),
                }}
              ></div>
              <div style={{ textTransform: 'capitalize', marginLeft: 16 }}>
                {snippetInfo.language || 'No Language'}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 32,
              fontWeight: 'bold',
            }}
          >
            <img
              src={
                snippetInfo.profiles.avatar ||
                'https://snipshelfit.vercel.app/images/logo_md.svg'
              }
              height={250}
              width={250}
              style={{ borderRadius: '10px' }}
            />
            <div style={{ marginTop: 16 }}>
              {snippetInfo.profiles.name || 'No Name'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://snipshelfit.vercel.app/images/logo_md.svg"
            height={120}
            width={120}
          />
          <div style={{ marginLeft: 16, fontSize: 32, fontWeight: 'bold' }}>
            Snipshelf
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
