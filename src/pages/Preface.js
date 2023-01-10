import './Preface.scss'

const prefaceLeft = 
<div className="preface-left-container container">
    <div className="preface-arrow"></div>
</div>;

const prefaceRight = 
<div className="preface-right-container container">
    <div className="preface-arrow" />
    <div className="preface-arrow-lower"/>
    <div className="education">
    </div>
</div>

const preface = {
    left: prefaceLeft,
    right: prefaceRight
}
export default preface;