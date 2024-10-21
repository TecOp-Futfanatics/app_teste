import UserAvatar from 'react-native-user-avatar';

interface AvatarProps {
    size: number;
    name: string;
}

export default function Avatar({size, name}: AvatarProps){
    return(
        <UserAvatar size={size} name={name} />
    );
}