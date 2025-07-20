export interface ButtonTitleHeaderProps {
  title: string;
  leftChilds?: {
    icon: React.ReactNode;
    onPress: () => void;
  };
  rightChilds?: {
    icon: React.ReactNode;
    onPress: () => void;
  }[];
}

export interface CenterHeaderProps {
  title: string;
  leftChilds?: {
    icon: React.ReactNode;
    onPress: () => void;
  };
  rightChilds?: {
    icon: React.ReactNode;
    onPress: () => void;
  };
}

export interface TitleMainHeaderProps {
  title: string;
  rightChilds?: {
    icon: React.ReactNode;
    onPress: () => void;
  };
}
