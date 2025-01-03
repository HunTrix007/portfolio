import { Button, Col, Drawer, Row, Segmented } from 'antd';
import { MoonOutlined, SettingOutlined, SunFilled, SunOutlined } from "@ant-design/icons";
import { useEffect, useState } from 'react';

const Customizer = () => {
    const [open, setOpen] = useState(false);
    const [prefs, setPrefs] = useState(JSON.parse(localStorage.getItem('prefs') || "{}"));
    
    useEffect(() => {
        let tempcolors = document.getElementById('template-colors');
        if (tempcolors) tempcolors.remove();
        const colorslink = document.createElement('link');
        colorslink.rel = 'stylesheet';
        colorslink.id = 'template-colors';
        colorslink.type = 'text/css';
        colorslink.href = `/portfolio/assets/css/template-colors/${prefs.color}.css`; 
        document.head.appendChild(colorslink);

        let tempdark = document.getElementById('template-dark');
        if (tempdark) tempdark.remove();
        if (prefs.dark) {
            const darklink = document.createElement('link');
            darklink.rel = 'stylesheet';
            darklink.id = 'template-dark';
            darklink.type = 'text/css';
            darklink.href = `/portfolio/assets/css/template-dark/dark.css`; 
            document.head.appendChild(darklink);
        }

        let temprtl = document.getElementById('template-rtl');
        if (temprtl) temprtl.remove();
        if (prefs.rtl) {
            const rtllink = document.createElement('link');
            rtllink.rel = 'stylesheet';
            rtllink.id = 'template-rtl';
            rtllink.type = 'text/css';
            rtllink.href = `/portfolio/assets/css/rtl.css`; 
            document.head.appendChild(rtllink);
        }

        localStorage.setItem('prefs', JSON.stringify(prefs));
    }, [prefs])

    return (
        <>
            <Button className="theme-customizer" color="primary" variant="filled" onClick={() => setOpen(true)}>
                <SettingOutlined />
            </Button>
            <Drawer className="theme-drawer" title="Theme Customizer" onClose={() => setOpen(false)} open={open}>
                <h6 className="customize-title" style={{marginTop: 0}}>Style</h6>
                <p className="customize-desc">Choose Light or Dark Mode.</p>
                <Segmented
                    value={prefs.dark ? 'Dark' : 'Light'}
                    options={[
                        {value:'Light', label: <>Light <SunOutlined /></>}, 
                        {value:'Dark', label: <>Dark <MoonOutlined /></>}, 
                    ]}
                    onChange={(value) => {
                        setPrefs({ ...prefs, dark: value === 'Dark' });
                    }}
                />

                <h6 className="customize-title">Colour Scheme</h6>
                <p className="customize-desc">Choose a colour scheme.</p>
                <Row gutter={[8,8]}>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'green' ? '#8cca77' : 'white'}} variant={prefs.color == 'green' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'green' })} >Green</Button>
                    </Col>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'blue' ? '#2555ba' : 'white'}} variant={prefs.color == 'blue' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'blue' })} >Blue</Button>
                    </Col>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'orange' ? '#f19d37' : 'white'}} variant={prefs.color == 'orange' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'orange' })} >Orange</Button>
                    </Col>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'pink' ? '#ec6994' : 'white'}} variant={prefs.color == 'pink' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'pink' })} >Pink</Button>
                    </Col>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'purple' ? '#b54fd3' : 'white'}} variant={prefs.color == 'purple' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'purple' })} >Purple</Button>
                    </Col>
                    <Col>
                        <Button color="default" style={{backgroundColor: prefs.color == 'red' ? '#d86f6e' : 'white'}} variant={prefs.color == 'red' ? "solid" : "dashed"} onClick={() => setPrefs({ ...prefs, color: 'red' })} >Red</Button>
                    </Col>
                </Row>
            </Drawer>
        </>
    );
}

export default Customizer;