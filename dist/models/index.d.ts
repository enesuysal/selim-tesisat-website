import mongoose from 'mongoose';
export declare const User: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    username: string;
    password: string;
    role: "admin" | "editor";
    lastLogin?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Service: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    price: string;
    icon: string;
    features: string[];
    category: "urgent" | "regular";
    isActive: boolean;
    order: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ContactInfo: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyPhone?: string | null;
    whatsapp?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const HeroContent: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const SeoPage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    isActive: boolean;
    path: string;
    keywords: string;
    canonical: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const SiteInfo: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    siteName: string;
    logo: string;
    tagline?: string | null;
    footerText?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const AboutPage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    values: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroImage: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: string;
    statsTitle: string;
    stats: mongoose.Types.DocumentArray<{
        number: string;
        label: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: string;
        label: string;
    }> & {
        number: string;
        label: string;
    }>;
    valuesTitle: string;
    teamTitle: string;
    teamMembers: mongoose.Types.DocumentArray<{
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }> & {
        name: string;
        description: string;
        title: string;
        expertise?: string | null;
        image?: string | null;
    }>;
    certificationsTitle: string;
    certifications: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
    testimonialsTitle: string;
    testimonials: mongoose.Types.DocumentArray<{
        text: string;
        image: string;
        author: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        image: string;
        author: string;
    }> & {
        text: string;
        image: string;
        author: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtons: mongoose.Types.DocumentArray<{
        text: string;
        link: string;
        icon?: string | null;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        text: string;
        link: string;
        icon?: string | null;
    }> & {
        text: string;
        link: string;
        icon?: string | null;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const WhyChoose: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    items: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const CTA: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ContactPage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emergencyPhone: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    emergencyTitle: string;
    emergencyDescription: string;
    contactInfoTitle: string;
    contactInfoImage: string;
    responseTime: string;
    formTitle: string;
    formDescription: string;
    firstNameLabel: string;
    lastNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    formServices: mongoose.Types.DocumentArray<{
        label: string;
        value: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        value: string;
    }> & {
        label: string;
        value: string;
    }>;
    serviceAreasTitle: string;
    serviceAreasImage: string;
    serviceAreas: string[];
    footerSlogan: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ServicesPage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    serviceAreas: string[];
    emergencyText: string;
    processTitle: string;
    processSteps: mongoose.Types.DocumentArray<{
        number: number;
        description: string;
        title: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        number: number;
        description: string;
        title: string;
    }> & {
        number: number;
        description: string;
        title: string;
    }>;
    coverageTitle: string;
    coverageDescription: string;
    warrantyTitle: string;
    warrantyDescription: string;
    warrantyFeatures: mongoose.Types.DocumentArray<{
        description: string;
        title: string;
        icon: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description: string;
        title: string;
        icon: string;
    }> & {
        description: string;
        title: string;
        icon: string;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=index.d.ts.map