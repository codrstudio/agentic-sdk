import { z } from "zod";
export declare const DisplayMetricSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    unit: z.ZodOptional<z.ZodString>;
    trend: z.ZodOptional<z.ZodObject<{
        direction: z.ZodEnum<["up", "down", "neutral"]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        direction: "up" | "down" | "neutral";
    }, {
        value: string;
        direction: "up" | "down" | "neutral";
    }>>;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string | number;
    label: string;
    unit?: string | undefined;
    trend?: {
        value: string;
        direction: "up" | "down" | "neutral";
    } | undefined;
    icon?: string | undefined;
}, {
    value: string | number;
    label: string;
    unit?: string | undefined;
    trend?: {
        value: string;
        direction: "up" | "down" | "neutral";
    } | undefined;
    icon?: string | undefined;
}>;
export declare const DisplayChartSchema: z.ZodObject<{
    type: z.ZodEnum<["bar", "line", "pie", "area", "donut"]>;
    title: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        color?: string | undefined;
    }, {
        value: number;
        label: string;
        color?: string | undefined;
    }>, "many">;
    format: z.ZodOptional<z.ZodObject<{
        prefix: z.ZodOptional<z.ZodString>;
        suffix: z.ZodOptional<z.ZodString>;
        locale: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locale: string;
        prefix?: string | undefined;
        suffix?: string | undefined;
    }, {
        prefix?: string | undefined;
        suffix?: string | undefined;
        locale?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "bar" | "line" | "pie" | "area" | "donut";
    title: string;
    data: {
        value: number;
        label: string;
        color?: string | undefined;
    }[];
    format?: {
        locale: string;
        prefix?: string | undefined;
        suffix?: string | undefined;
    } | undefined;
}, {
    type: "bar" | "line" | "pie" | "area" | "donut";
    title: string;
    data: {
        value: number;
        label: string;
        color?: string | undefined;
    }[];
    format?: {
        prefix?: string | undefined;
        suffix?: string | undefined;
        locale?: string | undefined;
    } | undefined;
}>;
export declare const DisplayTableSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    columns: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        type: z.ZodDefault<z.ZodEnum<["text", "number", "money", "image", "link", "badge"]>>;
        align: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "link" | "text" | "money" | "image" | "badge";
        label: string;
        key: string;
        align: "left" | "center" | "right";
    }, {
        label: string;
        key: string;
        type?: "number" | "link" | "text" | "money" | "image" | "badge" | undefined;
        align?: "left" | "center" | "right" | undefined;
    }>, "many">;
    rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    sortable: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    columns: {
        type: "number" | "link" | "text" | "money" | "image" | "badge";
        label: string;
        key: string;
        align: "left" | "center" | "right";
    }[];
    rows: Record<string, unknown>[];
    sortable: boolean;
    title?: string | undefined;
}, {
    columns: {
        label: string;
        key: string;
        type?: "number" | "link" | "text" | "money" | "image" | "badge" | undefined;
        align?: "left" | "center" | "right" | undefined;
    }[];
    rows: Record<string, unknown>[];
    title?: string | undefined;
    sortable?: boolean | undefined;
}>;
export declare const DisplayProgressSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        status: z.ZodEnum<["completed", "current", "pending"]>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "pending" | "completed" | "current";
        label: string;
        description?: string | undefined;
    }, {
        status: "pending" | "completed" | "current";
        label: string;
        description?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    steps: {
        status: "pending" | "completed" | "current";
        label: string;
        description?: string | undefined;
    }[];
    title?: string | undefined;
}, {
    steps: {
        status: "pending" | "completed" | "current";
        label: string;
        description?: string | undefined;
    }[];
    title?: string | undefined;
}>;
export declare const DisplayProductSchema: z.ZodObject<{
    title: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        currency: string;
    }, {
        value: number;
        currency?: string | undefined;
    }>>;
    originalPrice: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        currency: string;
    }, {
        value: number;
        currency?: string | undefined;
    }>>;
    rating: z.ZodOptional<z.ZodObject<{
        score: z.ZodNumber;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        count: number;
        score: number;
    }, {
        count: number;
        score: number;
    }>>;
    source: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
        favicon?: string | undefined;
    }, {
        name: string;
        url: string;
        favicon?: string | undefined;
    }>>;
    badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        variant: "default" | "success" | "warning" | "error" | "info";
    }, {
        label: string;
        variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
    }>, "many">>;
    url: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description?: string | undefined;
    url?: string | undefined;
    image?: string | undefined;
    price?: {
        value: number;
        currency: string;
    } | undefined;
    originalPrice?: {
        value: number;
        currency: string;
    } | undefined;
    rating?: {
        count: number;
        score: number;
    } | undefined;
    source?: {
        name: string;
        url: string;
        favicon?: string | undefined;
    } | undefined;
    badges?: {
        label: string;
        variant: "default" | "success" | "warning" | "error" | "info";
    }[] | undefined;
}, {
    title: string;
    description?: string | undefined;
    url?: string | undefined;
    image?: string | undefined;
    price?: {
        value: number;
        currency?: string | undefined;
    } | undefined;
    originalPrice?: {
        value: number;
        currency?: string | undefined;
    } | undefined;
    rating?: {
        count: number;
        score: number;
    } | undefined;
    source?: {
        name: string;
        url: string;
        favicon?: string | undefined;
    } | undefined;
    badges?: {
        label: string;
        variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
    }[] | undefined;
}>;
export declare const DisplayComparisonSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>>;
        originalPrice: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>>;
        rating: z.ZodOptional<z.ZodObject<{
            score: z.ZodNumber;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            count: number;
            score: number;
        }, {
            count: number;
            score: number;
        }>>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }>>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }, {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }>, "many">>;
        url: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency: string;
        } | undefined;
        originalPrice?: {
            value: number;
            currency: string;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }[] | undefined;
    }, {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        originalPrice?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }[] | undefined;
    }>, "many">;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        key: string;
    }, {
        label: string;
        key: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    items: {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency: string;
        } | undefined;
        originalPrice?: {
            value: number;
            currency: string;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }[] | undefined;
    }[];
    title?: string | undefined;
    attributes?: {
        label: string;
        key: string;
    }[] | undefined;
}, {
    items: {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        originalPrice?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }[] | undefined;
    }[];
    title?: string | undefined;
    attributes?: {
        label: string;
        key: string;
    }[] | undefined;
}>;
export declare const DisplayPriceSchema: z.ZodObject<{
    value: z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        currency: string;
    }, {
        value: number;
        currency?: string | undefined;
    }>;
    label: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
        favicon?: string | undefined;
    }, {
        name: string;
        url: string;
        favicon?: string | undefined;
    }>>;
    badge: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        variant: "default" | "success" | "warning" | "error" | "info";
    }, {
        label: string;
        variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    value: {
        value: number;
        currency: string;
    };
    label: string;
    badge?: {
        label: string;
        variant: "default" | "success" | "warning" | "error" | "info";
    } | undefined;
    source?: {
        name: string;
        url: string;
        favicon?: string | undefined;
    } | undefined;
    context?: string | undefined;
}, {
    value: {
        value: number;
        currency?: string | undefined;
    };
    label: string;
    badge?: {
        label: string;
        variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
    } | undefined;
    source?: {
        name: string;
        url: string;
        favicon?: string | undefined;
    } | undefined;
    context?: string | undefined;
}>;
export declare const DisplayImageSchema: z.ZodObject<{
    url: z.ZodString;
    alt: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    url: string;
    alt?: string | undefined;
    caption?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
}, {
    url: string;
    alt?: string | undefined;
    caption?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
}>;
export declare const DisplayGallerySchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    images: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
    }, {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["grid", "masonry"]>>;
    columns: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    columns: number;
    images: {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
    }[];
    layout: "grid" | "masonry";
    title?: string | undefined;
}, {
    images: {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
    }[];
    title?: string | undefined;
    columns?: number | undefined;
    layout?: "grid" | "masonry" | undefined;
}>;
export declare const DisplayCarouselSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        subtitle: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }, {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency: string;
        } | undefined;
        badges?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }[] | undefined;
        subtitle?: string | undefined;
    }, {
        title: string;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }[] | undefined;
        subtitle?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        title: string;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency: string;
        } | undefined;
        badges?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }[] | undefined;
        subtitle?: string | undefined;
    }[];
    title?: string | undefined;
}, {
    items: {
        title: string;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }[] | undefined;
        subtitle?: string | undefined;
    }[];
    title?: string | undefined;
}>;
export declare const DisplaySourcesSchema: z.ZodObject<{
    label: z.ZodDefault<z.ZodString>;
    sources: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
        snippet: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        url: string;
        favicon?: string | undefined;
        snippet?: string | undefined;
    }, {
        title: string;
        url: string;
        favicon?: string | undefined;
        snippet?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    label: string;
    sources: {
        title: string;
        url: string;
        favicon?: string | undefined;
        snippet?: string | undefined;
    }[];
}, {
    sources: {
        title: string;
        url: string;
        favicon?: string | undefined;
        snippet?: string | undefined;
    }[];
    label?: string | undefined;
}>;
export declare const DisplayLinkSchema: z.ZodObject<{
    url: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    favicon: z.ZodOptional<z.ZodString>;
    domain: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    url: string;
    description?: string | undefined;
    favicon?: string | undefined;
    image?: string | undefined;
    domain?: string | undefined;
}, {
    title: string;
    url: string;
    description?: string | undefined;
    favicon?: string | undefined;
    image?: string | undefined;
    domain?: string | undefined;
}>;
export declare const DisplayMapSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    pins: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        label: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
        label?: string | undefined;
        address?: string | undefined;
    }, {
        lat: number;
        lng: number;
        label?: string | undefined;
        address?: string | undefined;
    }>, "many">;
    zoom: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    pins: {
        lat: number;
        lng: number;
        label?: string | undefined;
        address?: string | undefined;
    }[];
    zoom: number;
    title?: string | undefined;
}, {
    pins: {
        lat: number;
        lng: number;
        label?: string | undefined;
        address?: string | undefined;
    }[];
    title?: string | undefined;
    zoom?: number | undefined;
}>;
export declare const DisplayFileSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    size: z.ZodOptional<z.ZodNumber>;
    url: z.ZodOptional<z.ZodString>;
    preview: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    url?: string | undefined;
    size?: number | undefined;
    preview?: string | undefined;
}, {
    type: string;
    name: string;
    url?: string | undefined;
    size?: number | undefined;
    preview?: string | undefined;
}>;
export declare const DisplayCodeSchema: z.ZodObject<{
    language: z.ZodString;
    code: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    lineNumbers: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    code: string;
    language: string;
    lineNumbers: boolean;
    title?: string | undefined;
}, {
    code: string;
    language: string;
    title?: string | undefined;
    lineNumbers?: boolean | undefined;
}>;
export declare const DisplaySpreadsheetSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    headers: z.ZodArray<z.ZodString, "many">;
    rows: z.ZodArray<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>, "many">, "many">;
    format: z.ZodOptional<z.ZodObject<{
        moneyColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        percentColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        moneyColumns?: number[] | undefined;
        percentColumns?: number[] | undefined;
    }, {
        moneyColumns?: number[] | undefined;
        percentColumns?: number[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    headers: string[];
    rows: (string | number | null)[][];
    title?: string | undefined;
    format?: {
        moneyColumns?: number[] | undefined;
        percentColumns?: number[] | undefined;
    } | undefined;
}, {
    headers: string[];
    rows: (string | number | null)[][];
    title?: string | undefined;
    format?: {
        moneyColumns?: number[] | undefined;
        percentColumns?: number[] | undefined;
    } | undefined;
}>;
export declare const DisplayStepsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["completed", "current", "pending"]>>;
    }, "strip", z.ZodTypeAny, {
        status: "pending" | "completed" | "current";
        title: string;
        description?: string | undefined;
    }, {
        title: string;
        status?: "pending" | "completed" | "current" | undefined;
        description?: string | undefined;
    }>, "many">;
    orientation: z.ZodDefault<z.ZodEnum<["vertical", "horizontal"]>>;
}, "strip", z.ZodTypeAny, {
    steps: {
        status: "pending" | "completed" | "current";
        title: string;
        description?: string | undefined;
    }[];
    orientation: "vertical" | "horizontal";
    title?: string | undefined;
}, {
    steps: {
        title: string;
        status?: "pending" | "completed" | "current" | undefined;
        description?: string | undefined;
    }[];
    title?: string | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>;
export declare const DisplayAlertSchema: z.ZodObject<{
    variant: z.ZodEnum<["info", "warning", "error", "success"]>;
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    variant: "success" | "warning" | "error" | "info";
    title?: string | undefined;
    icon?: string | undefined;
}, {
    message: string;
    variant: "success" | "warning" | "error" | "info";
    title?: string | undefined;
    icon?: string | undefined;
}>;
export declare const DisplayChoicesSchema: z.ZodObject<{
    question: z.ZodOptional<z.ZodString>;
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        description?: string | undefined;
        icon?: string | undefined;
    }, {
        id: string;
        label: string;
        description?: string | undefined;
        icon?: string | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["buttons", "cards", "list"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "buttons" | "cards" | "list";
    choices: {
        id: string;
        label: string;
        description?: string | undefined;
        icon?: string | undefined;
    }[];
    question?: string | undefined;
}, {
    choices: {
        id: string;
        label: string;
        description?: string | undefined;
        icon?: string | undefined;
    }[];
    question?: string | undefined;
    layout?: "buttons" | "cards" | "list" | undefined;
}>;
export declare const DisplayToolRegistry: {
    readonly display_metric: z.ZodObject<{
        label: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        unit: z.ZodOptional<z.ZodString>;
        trend: z.ZodOptional<z.ZodObject<{
            direction: z.ZodEnum<["up", "down", "neutral"]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            direction: "up" | "down" | "neutral";
        }, {
            value: string;
            direction: "up" | "down" | "neutral";
        }>>;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string | number;
        label: string;
        unit?: string | undefined;
        trend?: {
            value: string;
            direction: "up" | "down" | "neutral";
        } | undefined;
        icon?: string | undefined;
    }, {
        value: string | number;
        label: string;
        unit?: string | undefined;
        trend?: {
            value: string;
            direction: "up" | "down" | "neutral";
        } | undefined;
        icon?: string | undefined;
    }>;
    readonly display_chart: z.ZodObject<{
        type: z.ZodEnum<["bar", "line", "pie", "area", "donut"]>;
        title: z.ZodString;
        data: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            color?: string | undefined;
        }, {
            value: number;
            label: string;
            color?: string | undefined;
        }>, "many">;
        format: z.ZodOptional<z.ZodObject<{
            prefix: z.ZodOptional<z.ZodString>;
            suffix: z.ZodOptional<z.ZodString>;
            locale: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locale: string;
            prefix?: string | undefined;
            suffix?: string | undefined;
        }, {
            prefix?: string | undefined;
            suffix?: string | undefined;
            locale?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "bar" | "line" | "pie" | "area" | "donut";
        title: string;
        data: {
            value: number;
            label: string;
            color?: string | undefined;
        }[];
        format?: {
            locale: string;
            prefix?: string | undefined;
            suffix?: string | undefined;
        } | undefined;
    }, {
        type: "bar" | "line" | "pie" | "area" | "donut";
        title: string;
        data: {
            value: number;
            label: string;
            color?: string | undefined;
        }[];
        format?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            locale?: string | undefined;
        } | undefined;
    }>;
    readonly display_table: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
            type: z.ZodDefault<z.ZodEnum<["text", "number", "money", "image", "link", "badge"]>>;
            align: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "link" | "text" | "money" | "image" | "badge";
            label: string;
            key: string;
            align: "left" | "center" | "right";
        }, {
            label: string;
            key: string;
            type?: "number" | "link" | "text" | "money" | "image" | "badge" | undefined;
            align?: "left" | "center" | "right" | undefined;
        }>, "many">;
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
        sortable: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        columns: {
            type: "number" | "link" | "text" | "money" | "image" | "badge";
            label: string;
            key: string;
            align: "left" | "center" | "right";
        }[];
        rows: Record<string, unknown>[];
        sortable: boolean;
        title?: string | undefined;
    }, {
        columns: {
            label: string;
            key: string;
            type?: "number" | "link" | "text" | "money" | "image" | "badge" | undefined;
            align?: "left" | "center" | "right" | undefined;
        }[];
        rows: Record<string, unknown>[];
        title?: string | undefined;
        sortable?: boolean | undefined;
    }>;
    readonly display_progress: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        steps: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            status: z.ZodEnum<["completed", "current", "pending"]>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }, {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        steps: {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }[];
        title?: string | undefined;
    }, {
        steps: {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }[];
        title?: string | undefined;
    }>;
    readonly display_product: z.ZodObject<{
        title: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>>;
        originalPrice: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>>;
        rating: z.ZodOptional<z.ZodObject<{
            score: z.ZodNumber;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            count: number;
            score: number;
        }, {
            count: number;
            score: number;
        }>>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }>>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }, {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }>, "many">>;
        url: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency: string;
        } | undefined;
        originalPrice?: {
            value: number;
            currency: string;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }[] | undefined;
    }, {
        title: string;
        description?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        price?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        originalPrice?: {
            value: number;
            currency?: string | undefined;
        } | undefined;
        rating?: {
            count: number;
            score: number;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        badges?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }[] | undefined;
    }>;
    readonly display_comparison: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            image: z.ZodOptional<z.ZodString>;
            price: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                currency: string;
            }, {
                value: number;
                currency?: string | undefined;
            }>>;
            originalPrice: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                currency: string;
            }, {
                value: number;
                currency?: string | undefined;
            }>>;
            rating: z.ZodOptional<z.ZodObject<{
                score: z.ZodNumber;
                count: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                count: number;
                score: number;
            }, {
                count: number;
                score: number;
            }>>;
            source: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                favicon: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                url: string;
                favicon?: string | undefined;
            }, {
                name: string;
                url: string;
                favicon?: string | undefined;
            }>>;
            badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }, {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }>, "many">>;
            url: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description?: string | undefined;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency: string;
            } | undefined;
            originalPrice?: {
                value: number;
                currency: string;
            } | undefined;
            rating?: {
                count: number;
                score: number;
            } | undefined;
            source?: {
                name: string;
                url: string;
                favicon?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }[] | undefined;
        }, {
            title: string;
            description?: string | undefined;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            originalPrice?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            rating?: {
                count: number;
                score: number;
            } | undefined;
            source?: {
                name: string;
                url: string;
                favicon?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }[] | undefined;
        }>, "many">;
        attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label: string;
            key: string;
        }, {
            label: string;
            key: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        items: {
            title: string;
            description?: string | undefined;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency: string;
            } | undefined;
            originalPrice?: {
                value: number;
                currency: string;
            } | undefined;
            rating?: {
                count: number;
                score: number;
            } | undefined;
            source?: {
                name: string;
                url: string;
                favicon?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }[] | undefined;
        }[];
        title?: string | undefined;
        attributes?: {
            label: string;
            key: string;
        }[] | undefined;
    }, {
        items: {
            title: string;
            description?: string | undefined;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            originalPrice?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            rating?: {
                count: number;
                score: number;
            } | undefined;
            source?: {
                name: string;
                url: string;
                favicon?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }[] | undefined;
        }[];
        title?: string | undefined;
        attributes?: {
            label: string;
            key: string;
        }[] | undefined;
    }>;
    readonly display_price: z.ZodObject<{
        value: z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            currency: string;
        }, {
            value: number;
            currency?: string | undefined;
        }>;
        label: z.ZodString;
        context: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }, {
            name: string;
            url: string;
            favicon?: string | undefined;
        }>>;
        badge: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        }, {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        value: {
            value: number;
            currency: string;
        };
        label: string;
        badge?: {
            label: string;
            variant: "default" | "success" | "warning" | "error" | "info";
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        context?: string | undefined;
    }, {
        value: {
            value: number;
            currency?: string | undefined;
        };
        label: string;
        badge?: {
            label: string;
            variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
        } | undefined;
        source?: {
            name: string;
            url: string;
            favicon?: string | undefined;
        } | undefined;
        context?: string | undefined;
    }>;
    readonly display_image: z.ZodObject<{
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }, {
        url: string;
        alt?: string | undefined;
        caption?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }>;
    readonly display_gallery: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        images: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }, {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }>, "many">;
        layout: z.ZodDefault<z.ZodEnum<["grid", "masonry"]>>;
        columns: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        columns: number;
        images: {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }[];
        layout: "grid" | "masonry";
        title?: string | undefined;
    }, {
        images: {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }[];
        title?: string | undefined;
        columns?: number | undefined;
        layout?: "grid" | "masonry" | undefined;
    }>;
    readonly display_carousel: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            image: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            subtitle: z.ZodOptional<z.ZodString>;
            price: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                currency: string;
            }, {
                value: number;
                currency?: string | undefined;
            }>>;
            url: z.ZodOptional<z.ZodString>;
            badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }, {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency: string;
            } | undefined;
            badges?: {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }[] | undefined;
            subtitle?: string | undefined;
        }, {
            title: string;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }[] | undefined;
            subtitle?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        items: {
            title: string;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency: string;
            } | undefined;
            badges?: {
                label: string;
                variant: "default" | "success" | "warning" | "error" | "info";
            }[] | undefined;
            subtitle?: string | undefined;
        }[];
        title?: string | undefined;
    }, {
        items: {
            title: string;
            url?: string | undefined;
            image?: string | undefined;
            price?: {
                value: number;
                currency?: string | undefined;
            } | undefined;
            badges?: {
                label: string;
                variant?: "default" | "success" | "warning" | "error" | "info" | undefined;
            }[] | undefined;
            subtitle?: string | undefined;
        }[];
        title?: string | undefined;
    }>;
    readonly display_sources: z.ZodObject<{
        label: z.ZodDefault<z.ZodString>;
        sources: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
            snippet: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }, {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        sources: {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }[];
    }, {
        sources: {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }[];
        label?: string | undefined;
    }>;
    readonly display_link: z.ZodObject<{
        url: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        favicon: z.ZodOptional<z.ZodString>;
        domain: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        url: string;
        description?: string | undefined;
        favicon?: string | undefined;
        image?: string | undefined;
        domain?: string | undefined;
    }, {
        title: string;
        url: string;
        description?: string | undefined;
        favicon?: string | undefined;
        image?: string | undefined;
        domain?: string | undefined;
    }>;
    readonly display_map: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        pins: z.ZodArray<z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
            label: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }, {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }>, "many">;
        zoom: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        pins: {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }[];
        zoom: number;
        title?: string | undefined;
    }, {
        pins: {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }[];
        title?: string | undefined;
        zoom?: number | undefined;
    }>;
    readonly display_file: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        size: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        preview: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
        url?: string | undefined;
        size?: number | undefined;
        preview?: string | undefined;
    }, {
        type: string;
        name: string;
        url?: string | undefined;
        size?: number | undefined;
        preview?: string | undefined;
    }>;
    readonly display_code: z.ZodObject<{
        language: z.ZodString;
        code: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        lineNumbers: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        language: string;
        lineNumbers: boolean;
        title?: string | undefined;
    }, {
        code: string;
        language: string;
        title?: string | undefined;
        lineNumbers?: boolean | undefined;
    }>;
    readonly display_spreadsheet: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        headers: z.ZodArray<z.ZodString, "many">;
        rows: z.ZodArray<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>, "many">, "many">;
        format: z.ZodOptional<z.ZodObject<{
            moneyColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            percentColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        }, {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        headers: string[];
        rows: (string | number | null)[][];
        title?: string | undefined;
        format?: {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        } | undefined;
    }, {
        headers: string[];
        rows: (string | number | null)[][];
        title?: string | undefined;
        format?: {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        } | undefined;
    }>;
    readonly display_steps: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        steps: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            status: z.ZodDefault<z.ZodEnum<["completed", "current", "pending"]>>;
        }, "strip", z.ZodTypeAny, {
            status: "pending" | "completed" | "current";
            title: string;
            description?: string | undefined;
        }, {
            title: string;
            status?: "pending" | "completed" | "current" | undefined;
            description?: string | undefined;
        }>, "many">;
        orientation: z.ZodDefault<z.ZodEnum<["vertical", "horizontal"]>>;
    }, "strip", z.ZodTypeAny, {
        steps: {
            status: "pending" | "completed" | "current";
            title: string;
            description?: string | undefined;
        }[];
        orientation: "vertical" | "horizontal";
        title?: string | undefined;
    }, {
        steps: {
            title: string;
            status?: "pending" | "completed" | "current" | undefined;
            description?: string | undefined;
        }[];
        title?: string | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }>;
    readonly display_alert: z.ZodObject<{
        variant: z.ZodEnum<["info", "warning", "error", "success"]>;
        title: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        variant: "success" | "warning" | "error" | "info";
        title?: string | undefined;
        icon?: string | undefined;
    }, {
        message: string;
        variant: "success" | "warning" | "error" | "info";
        title?: string | undefined;
        icon?: string | undefined;
    }>;
    readonly display_choices: z.ZodObject<{
        question: z.ZodOptional<z.ZodString>;
        choices: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }, {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }>, "many">;
        layout: z.ZodDefault<z.ZodEnum<["buttons", "cards", "list"]>>;
    }, "strip", z.ZodTypeAny, {
        layout: "buttons" | "cards" | "list";
        choices: {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }[];
        question?: string | undefined;
    }, {
        choices: {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }[];
        question?: string | undefined;
        layout?: "buttons" | "cards" | "list" | undefined;
    }>;
};
export type DisplayToolName = keyof typeof DisplayToolRegistry;
export type DisplayMetric = z.infer<typeof DisplayMetricSchema>;
export type DisplayChart = z.infer<typeof DisplayChartSchema>;
export type DisplayTable = z.infer<typeof DisplayTableSchema>;
export type DisplayProgress = z.infer<typeof DisplayProgressSchema>;
export type DisplayProduct = z.infer<typeof DisplayProductSchema>;
export type DisplayComparison = z.infer<typeof DisplayComparisonSchema>;
export type DisplayPrice = z.infer<typeof DisplayPriceSchema>;
export type DisplayImage = z.infer<typeof DisplayImageSchema>;
export type DisplayGallery = z.infer<typeof DisplayGallerySchema>;
export type DisplayCarousel = z.infer<typeof DisplayCarouselSchema>;
export type DisplaySources = z.infer<typeof DisplaySourcesSchema>;
export type DisplayLink = z.infer<typeof DisplayLinkSchema>;
export type DisplayMap = z.infer<typeof DisplayMapSchema>;
export type DisplayFile = z.infer<typeof DisplayFileSchema>;
export type DisplayCode = z.infer<typeof DisplayCodeSchema>;
export type DisplaySpreadsheet = z.infer<typeof DisplaySpreadsheetSchema>;
export type DisplaySteps = z.infer<typeof DisplayStepsSchema>;
export type DisplayAlert = z.infer<typeof DisplayAlertSchema>;
export type DisplayChoices = z.infer<typeof DisplayChoicesSchema>;
