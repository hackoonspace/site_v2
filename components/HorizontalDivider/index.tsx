export default function HorizontalDivider () {
    return (
        <hr 
            className='d-flex justify-content-center mx-auto'
            style={{
                height: '2px',
                maxWidth: '35%',
                color:  'rgb(235, 100, 140)',
                backgroundColor: 'rgb(235, 100, 140)',
                marginTop: 48,
                opacity: 1,
                borderRadius: '10px'
            }}
        />
    );
}