import { ReactTinyLink } from 'react-tiny-link';
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