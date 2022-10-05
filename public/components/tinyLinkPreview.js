
import dynamic from 'next/dynamic';

const ReactTinyLink = dynamic(() => import('react-tiny-link').then(mod => mod.ReactTinyLink), {
    ssr: false,
});

export default function TinyLinkPreview({ url }) {
    return (
        <div style={{
            
        }}>
        <ReactTinyLink
            fontSize={"0.5rem"}
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url={url}
            />
            </div>
    );

}