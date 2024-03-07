
type Props = {
    children: React.ReactNode;
}
export const MaxContainer = ({children}: Props) => {
    return (
        <div className='w-full max-w-6xl mx-auto'>
            {children}
        </div>
    );
};