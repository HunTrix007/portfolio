import { Button, Image } from "antd";
import { useState } from "react";

const PreviewOnly = ({img}) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <a href="#" className="lnk" style={{textAlign: 'left'}} onClick={(e) => {e.preventDefault();setVisible(true);}}>
                <span className="text">View Doc</span>
                <span className="fas fa-angle-left" style={{transform: 'rotate(180deg)', marginLeft: '10px'}}></span>
            </a>
            <Image
                width={200}
                style={{ display: 'none' }}
                src="#"
                preview={{
                    visible,
                    src: img,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            />
        </>
    )
};

export default PreviewOnly;