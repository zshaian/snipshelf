import { getSnippetInfoMetadata } from '@/services';
import { ImageResponse } from 'next/og';

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <img
          src="https://snipshelfit.vercel.app/images/logo_md.svg"
          height={60}
          width={60}
          alt="logo"
        />
        <div style={{ fontSize: 32, fontWeight: 'bold' }}>
          {snippetInfo.title || 'Untitled Snippet'}
        </div>
        <div style={{ fontSize: 18, marginTop: 10 }}>
          {snippetInfo.description || 'No Description'}
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          <img
            src={
              snippetInfo.profiles.avatar ||
              'https://snipshelfit.vercel.app/images/logo_md.svg'
            }
            height={30}
            width={30}
            alt="author image"
          />
          <div style={{ marginLeft: 10 }}>
            {snippetInfo.profiles.name || 'No Author'}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
