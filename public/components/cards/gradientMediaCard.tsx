

interface GradientMediaCardProps {
    imgSource?: string;
    imgAlt?: string;
    title?: string;
    content?: string;
    link?: string;
};


export default function GradientMediaCard({ imgSource, imgAlt, title, content, link }: GradientMediaCardProps) {

    return (
        <div className='gradientMediaCard'>
            {imgSource &&
                <img src={imgSource} alt={imgAlt} />
            }
            {title &&
                <h3><a href={link}>{title}</a></h3>
            }
            {/* If content exists, then display content, else display the link */}
            {content &&
                <p>{content}</p>
            }
            {link && !content &&
                <p><a href={link}>{link}</a></p>
            }

        </div>
    );
}