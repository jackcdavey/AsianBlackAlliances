import Image from "next/image";

export default function Decor() {
    var assetPosition = "";
    // Pick a random number 0 and 80, and set the assetPosition to the corresponding position
    var posRandomNum = Math.floor(Math.random() * 80);
    if (posRandomNum < 20) 
        assetPosition = "decorTopLeft";
    else if (posRandomNum < 40)
        assetPosition = "decorTopRight";
    // else if (posRandomNum < 30)
    //     assetPosition = "decorBottomLeft";
    // else if (posRandomNum < 40)
    //     assetPosition = "decorBottomRight";
    // else if (posRandomNum < 50)
    //     assetPosition = "decorLeftTop";
    // else if (posRandomNum < 60)
    //     assetPosition = "decorLeftBottom";
    else if (posRandomNum < 60)
        assetPosition = "decorRightTop";
    else if (posRandomNum < 80)
        assetPosition = "decorRightBottom";
    

    
    assetPosition="decorTopRight";
    // Pick a random number between 0 and 40, and render a different image based on the number
    const randomNum = Math.floor(Math.random() * 40 + 1)
    if (randomNum < 10) {
        return (
            <Image className='cardDecor' id={assetPosition}
                src='/media/CustomAssets/orangeLeafAsset.png'
                width={200}
                height={100}
            />
        )
    }
    else if (randomNum < 20) {
        return (
            <Image className='cardDecor' id={assetPosition}
                src='/media/CustomAssets/leafAsset.png'
                width={200}
                height={100}
            />
        )
    }
    else if (randomNum < 30) {
        return (
            <Image className='cardDecor' id={assetPosition}
                src='/media/CustomAssets/lightLeafAsset.png'
                width={200}
                height={100}
            />
        )
    }
    else {
        return (
            <Image className='cardDecor' id={assetPosition}
                src='/media/CustomAssets/lightOrangeLeafAsset.png'
                width={200}
                height={100}
            />
        )
    }
}