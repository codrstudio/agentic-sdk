import { z } from "zod";
export declare const DisplayMetricSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    unit: z.ZodOptional<z.ZodString>;
    trend: z.ZodOptional<z.ZodObject<{
        direction: z.ZodEnum<["up", "down", "neutral"]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        direction?: "up" | "down" | "neutral";
    }, {
        value?: string;
        direction?: "up" | "down" | "neutral";
    }>>;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: string | number;
    label?: string;
    unit?: string;
    trend?: {
        value?: string;
        direction?: "up" | "down" | "neutral";
    };
    icon?: string;
}, {
    value?: string | number;
    label?: string;
    unit?: string;
    trend?: {
        value?: string;
        direction?: "up" | "down" | "neutral";
    };
    icon?: string;
}>;
export declare const DisplayChartSchema: z.ZodObject<{
    type: z.ZodEnum<["bar", "line", "pie", "area", "donut"]>;
    title: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        label?: string;
        color?: string;
    }, {
        value?: number;
        label?: string;
        color?: string;
    }>, "many">;
    format: z.ZodOptional<z.ZodObject<{
        prefix: z.ZodOptional<z.ZodString>;
        suffix: z.ZodOptional<z.ZodString>;
        locale: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        prefix?: string;
        suffix?: string;
        locale?: string;
    }, {
        prefix?: string;
        suffix?: string;
        locale?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type?: "bar" | "line" | "pie" | "area" | "donut";
    title?: string;
    data?: {
        value?: number;
        label?: string;
        color?: string;
    }[];
    format?: {
        prefix?: string;
        suffix?: string;
        locale?: string;
    };
}, {
    type?: "bar" | "line" | "pie" | "area" | "donut";
    title?: string;
    data?: {
        value?: number;
        label?: string;
        color?: string;
    }[];
    format?: {
        prefix?: string;
        suffix?: string;
        locale?: string;
    };
}>;
export declare const DisplayTableSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    columns: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        type: z.ZodDefault<z.ZodEnum<["text", "number", "money", "image", "link", "badge"]>>;
        align: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
    }, "strip", z.ZodTypeAny, {
        type?: "number" | "text" | "money" | "image" | "link" | "badge";
        label?: string;
        key?: string;
        align?: "left" | "center" | "right";
    }, {
        type?: "number" | "text" | "money" | "image" | "link" | "badge";
        label?: string;
        key?: string;
        align?: "left" | "center" | "right";
    }>, "many">;
    rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    sortable: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    columns?: {
        type?: "number" | "text" | "money" | "image" | "link" | "badge";
        label?: string;
        key?: string;
        align?: "left" | "center" | "right";
    }[];
    rows?: Record<string, unknown>[];
    sortable?: boolean;
}, {
    title?: string;
    columns?: {
        type?: "number" | "text" | "money" | "image" | "link" | "badge";
        label?: string;
        key?: string;
        align?: "left" | "center" | "right";
    }[];
    rows?: Record<string, unknown>[];
    sortable?: boolean;
}>;
export declare const DisplayProgressSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        status: z.ZodEnum<["completed", "current", "pending"]>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: "completed" | "current" | "pending";
        label?: string;
        description?: string;
    }, {
        status?: "completed" | "current" | "pending";
        label?: string;
        description?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title?: string;
    steps?: {
        status?: "completed" | "current" | "pending";
        label?: string;
        description?: string;
    }[];
}, {
    title?: string;
    steps?: {
        status?: "completed" | "current" | "pending";
        label?: string;
        description?: string;
    }[];
}>;
export declare const DisplayProductSchema: z.ZodObject<{
    title: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        currency?: string;
    }, {
        value?: number;
        currency?: string;
    }>>;
    originalPrice: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        currency?: string;
    }, {
        value?: number;
        currency?: string;
    }>>;
    rating: z.ZodOptional<z.ZodObject<{
        score: z.ZodNumber;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        score?: number;
        count?: number;
    }, {
        score?: number;
        count?: number;
    }>>;
    source: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        url?: string;
        favicon?: string;
    }, {
        name?: string;
        url?: string;
        favicon?: string;
    }>>;
    badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }, {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }>, "many">>;
    url: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url?: string;
    title?: string;
    image?: string;
    description?: string;
    price?: {
        value?: number;
        currency?: string;
    };
    originalPrice?: {
        value?: number;
        currency?: string;
    };
    rating?: {
        score?: number;
        count?: number;
    };
    source?: {
        name?: string;
        url?: string;
        favicon?: string;
    };
    badges?: {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }[];
}, {
    url?: string;
    title?: string;
    image?: string;
    description?: string;
    price?: {
        value?: number;
        currency?: string;
    };
    originalPrice?: {
        value?: number;
        currency?: string;
    };
    rating?: {
        score?: number;
        count?: number;
    };
    source?: {
        name?: string;
        url?: string;
        favicon?: string;
    };
    badges?: {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }[];
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
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>>;
        originalPrice: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>>;
        rating: z.ZodOptional<z.ZodObject<{
            score: z.ZodNumber;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            score?: number;
            count?: number;
        }, {
            score?: number;
            count?: number;
        }>>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string;
            url?: string;
            favicon?: string;
        }, {
            name?: string;
            url?: string;
            favicon?: string;
        }>>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }>, "many">>;
        url: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
    }, {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
    }>, "many">;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        key?: string;
    }, {
        label?: string;
        key?: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    items?: {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
    }[];
    attributes?: {
        label?: string;
        key?: string;
    }[];
}, {
    title?: string;
    items?: {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
    }[];
    attributes?: {
        label?: string;
        key?: string;
    }[];
}>;
export declare const DisplayPriceSchema: z.ZodObject<{
    value: z.ZodObject<{
        value: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        currency?: string;
    }, {
        value?: number;
        currency?: string;
    }>;
    label: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        url?: string;
        favicon?: string;
    }, {
        name?: string;
        url?: string;
        favicon?: string;
    }>>;
    badge: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }, {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    }>>;
}, "strip", z.ZodTypeAny, {
    value?: {
        value?: number;
        currency?: string;
    };
    label?: string;
    badge?: {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    };
    source?: {
        name?: string;
        url?: string;
        favicon?: string;
    };
    context?: string;
}, {
    value?: {
        value?: number;
        currency?: string;
    };
    label?: string;
    badge?: {
        label?: string;
        variant?: "default" | "success" | "warning" | "error" | "info";
    };
    source?: {
        name?: string;
        url?: string;
        favicon?: string;
    };
    context?: string;
}>;
export declare const DisplayImageSchema: z.ZodObject<{
    url: z.ZodString;
    alt: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    url?: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
}, {
    url?: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
}>;
export declare const DisplayGallerySchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    images: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        alt?: string;
        caption?: string;
    }, {
        url?: string;
        alt?: string;
        caption?: string;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["grid", "masonry"]>>;
    columns: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    columns?: number;
    images?: {
        url?: string;
        alt?: string;
        caption?: string;
    }[];
    layout?: "grid" | "masonry";
}, {
    title?: string;
    columns?: number;
    images?: {
        url?: string;
        alt?: string;
        caption?: string;
    }[];
    layout?: "grid" | "masonry";
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
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>>;
        url: z.ZodOptional<z.ZodString>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        title?: string;
        image?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
        subtitle?: string;
    }, {
        url?: string;
        title?: string;
        image?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
        subtitle?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title?: string;
    items?: {
        url?: string;
        title?: string;
        image?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
        subtitle?: string;
    }[];
}, {
    title?: string;
    items?: {
        url?: string;
        title?: string;
        image?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
        subtitle?: string;
    }[];
}>;
export declare const DisplaySourcesSchema: z.ZodObject<{
    label: z.ZodDefault<z.ZodString>;
    sources: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
        favicon: z.ZodOptional<z.ZodString>;
        snippet: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        favicon?: string;
        title?: string;
        snippet?: string;
    }, {
        url?: string;
        favicon?: string;
        title?: string;
        snippet?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    label?: string;
    sources?: {
        url?: string;
        favicon?: string;
        title?: string;
        snippet?: string;
    }[];
}, {
    label?: string;
    sources?: {
        url?: string;
        favicon?: string;
        title?: string;
        snippet?: string;
    }[];
}>;
export declare const DisplayLinkSchema: z.ZodObject<{
    url: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    favicon: z.ZodOptional<z.ZodString>;
    domain: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url?: string;
    favicon?: string;
    title?: string;
    image?: string;
    description?: string;
    domain?: string;
}, {
    url?: string;
    favicon?: string;
    title?: string;
    image?: string;
    description?: string;
    domain?: string;
}>;
export declare const DisplayMapSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    pins: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        label: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        lat?: number;
        lng?: number;
        address?: string;
    }, {
        label?: string;
        lat?: number;
        lng?: number;
        address?: string;
    }>, "many">;
    zoom: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    pins?: {
        label?: string;
        lat?: number;
        lng?: number;
        address?: string;
    }[];
    zoom?: number;
}, {
    title?: string;
    pins?: {
        label?: string;
        lat?: number;
        lng?: number;
        address?: string;
    }[];
    zoom?: number;
}>;
export declare const DisplayFileSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    size: z.ZodOptional<z.ZodNumber>;
    url: z.ZodOptional<z.ZodString>;
    preview: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: string;
    name?: string;
    url?: string;
    size?: number;
    preview?: string;
}, {
    type?: string;
    name?: string;
    url?: string;
    size?: number;
    preview?: string;
}>;
export declare const DisplayCodeSchema: z.ZodObject<{
    language: z.ZodString;
    code: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    lineNumbers: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    title?: string;
    language?: string;
    lineNumbers?: boolean;
}, {
    code?: string;
    title?: string;
    language?: string;
    lineNumbers?: boolean;
}>;
export declare const DisplaySpreadsheetSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    headers: z.ZodArray<z.ZodString, "many">;
    rows: z.ZodArray<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>, "many">, "many">;
    format: z.ZodOptional<z.ZodObject<{
        moneyColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        percentColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        moneyColumns?: number[];
        percentColumns?: number[];
    }, {
        moneyColumns?: number[];
        percentColumns?: number[];
    }>>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    format?: {
        moneyColumns?: number[];
        percentColumns?: number[];
    };
    rows?: (string | number)[][];
    headers?: string[];
}, {
    title?: string;
    format?: {
        moneyColumns?: number[];
        percentColumns?: number[];
    };
    rows?: (string | number)[][];
    headers?: string[];
}>;
export declare const DisplayStepsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["completed", "current", "pending"]>>;
    }, "strip", z.ZodTypeAny, {
        status?: "completed" | "current" | "pending";
        title?: string;
        description?: string;
    }, {
        status?: "completed" | "current" | "pending";
        title?: string;
        description?: string;
    }>, "many">;
    orientation: z.ZodDefault<z.ZodEnum<["vertical", "horizontal"]>>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    steps?: {
        status?: "completed" | "current" | "pending";
        title?: string;
        description?: string;
    }[];
    orientation?: "vertical" | "horizontal";
}, {
    title?: string;
    steps?: {
        status?: "completed" | "current" | "pending";
        title?: string;
        description?: string;
    }[];
    orientation?: "vertical" | "horizontal";
}>;
export declare const DisplayAlertSchema: z.ZodObject<{
    variant: z.ZodEnum<["info", "warning", "error", "success"]>;
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message?: string;
    variant?: "success" | "warning" | "error" | "info";
    icon?: string;
    title?: string;
}, {
    message?: string;
    variant?: "success" | "warning" | "error" | "info";
    icon?: string;
    title?: string;
}>;
export declare const DisplayChoicesSchema: z.ZodObject<{
    question: z.ZodOptional<z.ZodString>;
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        icon?: string;
        description?: string;
        id?: string;
    }, {
        label?: string;
        icon?: string;
        description?: string;
        id?: string;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["buttons", "cards", "list"]>>;
}, "strip", z.ZodTypeAny, {
    layout?: "buttons" | "cards" | "list";
    question?: string;
    choices?: {
        label?: string;
        icon?: string;
        description?: string;
        id?: string;
    }[];
}, {
    layout?: "buttons" | "cards" | "list";
    question?: string;
    choices?: {
        label?: string;
        icon?: string;
        description?: string;
        id?: string;
    }[];
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
            value?: string;
            direction?: "up" | "down" | "neutral";
        }, {
            value?: string;
            direction?: "up" | "down" | "neutral";
        }>>;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | number;
        label?: string;
        unit?: string;
        trend?: {
            value?: string;
            direction?: "up" | "down" | "neutral";
        };
        icon?: string;
    }, {
        value?: string | number;
        label?: string;
        unit?: string;
        trend?: {
            value?: string;
            direction?: "up" | "down" | "neutral";
        };
        icon?: string;
    }>;
    readonly display_chart: z.ZodObject<{
        type: z.ZodEnum<["bar", "line", "pie", "area", "donut"]>;
        title: z.ZodString;
        data: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            label?: string;
            color?: string;
        }, {
            value?: number;
            label?: string;
            color?: string;
        }>, "many">;
        format: z.ZodOptional<z.ZodObject<{
            prefix: z.ZodOptional<z.ZodString>;
            suffix: z.ZodOptional<z.ZodString>;
            locale: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            prefix?: string;
            suffix?: string;
            locale?: string;
        }, {
            prefix?: string;
            suffix?: string;
            locale?: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type?: "bar" | "line" | "pie" | "area" | "donut";
        title?: string;
        data?: {
            value?: number;
            label?: string;
            color?: string;
        }[];
        format?: {
            prefix?: string;
            suffix?: string;
            locale?: string;
        };
    }, {
        type?: "bar" | "line" | "pie" | "area" | "donut";
        title?: string;
        data?: {
            value?: number;
            label?: string;
            color?: string;
        }[];
        format?: {
            prefix?: string;
            suffix?: string;
            locale?: string;
        };
    }>;
    readonly display_table: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
            type: z.ZodDefault<z.ZodEnum<["text", "number", "money", "image", "link", "badge"]>>;
            align: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "number" | "text" | "money" | "image" | "link" | "badge";
            label?: string;
            key?: string;
            align?: "left" | "center" | "right";
        }, {
            type?: "number" | "text" | "money" | "image" | "link" | "badge";
            label?: string;
            key?: string;
            align?: "left" | "center" | "right";
        }>, "many">;
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
        sortable: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        columns?: {
            type?: "number" | "text" | "money" | "image" | "link" | "badge";
            label?: string;
            key?: string;
            align?: "left" | "center" | "right";
        }[];
        rows?: Record<string, unknown>[];
        sortable?: boolean;
    }, {
        title?: string;
        columns?: {
            type?: "number" | "text" | "money" | "image" | "link" | "badge";
            label?: string;
            key?: string;
            align?: "left" | "center" | "right";
        }[];
        rows?: Record<string, unknown>[];
        sortable?: boolean;
    }>;
    readonly display_progress: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        steps: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            status: z.ZodEnum<["completed", "current", "pending"]>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: "completed" | "current" | "pending";
            label?: string;
            description?: string;
        }, {
            status?: "completed" | "current" | "pending";
            label?: string;
            description?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        steps?: {
            status?: "completed" | "current" | "pending";
            label?: string;
            description?: string;
        }[];
    }, {
        title?: string;
        steps?: {
            status?: "completed" | "current" | "pending";
            label?: string;
            description?: string;
        }[];
    }>;
    readonly display_product: z.ZodObject<{
        title: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>>;
        originalPrice: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>>;
        rating: z.ZodOptional<z.ZodObject<{
            score: z.ZodNumber;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            score?: number;
            count?: number;
        }, {
            score?: number;
            count?: number;
        }>>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string;
            url?: string;
            favicon?: string;
        }, {
            name?: string;
            url?: string;
            favicon?: string;
        }>>;
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }>, "many">>;
        url: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
    }, {
        url?: string;
        title?: string;
        image?: string;
        description?: string;
        price?: {
            value?: number;
            currency?: string;
        };
        originalPrice?: {
            value?: number;
            currency?: string;
        };
        rating?: {
            score?: number;
            count?: number;
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        badges?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }[];
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
                value?: number;
                currency?: string;
            }, {
                value?: number;
                currency?: string;
            }>>;
            originalPrice: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: number;
                currency?: string;
            }, {
                value?: number;
                currency?: string;
            }>>;
            rating: z.ZodOptional<z.ZodObject<{
                score: z.ZodNumber;
                count: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                score?: number;
                count?: number;
            }, {
                score?: number;
                count?: number;
            }>>;
            source: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                favicon: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string;
                url?: string;
                favicon?: string;
            }, {
                name?: string;
                url?: string;
                favicon?: string;
            }>>;
            badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }, {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }>, "many">>;
            url: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url?: string;
            title?: string;
            image?: string;
            description?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            originalPrice?: {
                value?: number;
                currency?: string;
            };
            rating?: {
                score?: number;
                count?: number;
            };
            source?: {
                name?: string;
                url?: string;
                favicon?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
        }, {
            url?: string;
            title?: string;
            image?: string;
            description?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            originalPrice?: {
                value?: number;
                currency?: string;
            };
            rating?: {
                score?: number;
                count?: number;
            };
            source?: {
                name?: string;
                url?: string;
                favicon?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
        }>, "many">;
        attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            key?: string;
        }, {
            label?: string;
            key?: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        items?: {
            url?: string;
            title?: string;
            image?: string;
            description?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            originalPrice?: {
                value?: number;
                currency?: string;
            };
            rating?: {
                score?: number;
                count?: number;
            };
            source?: {
                name?: string;
                url?: string;
                favicon?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
        }[];
        attributes?: {
            label?: string;
            key?: string;
        }[];
    }, {
        title?: string;
        items?: {
            url?: string;
            title?: string;
            image?: string;
            description?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            originalPrice?: {
                value?: number;
                currency?: string;
            };
            rating?: {
                score?: number;
                count?: number;
            };
            source?: {
                name?: string;
                url?: string;
                favicon?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
        }[];
        attributes?: {
            label?: string;
            key?: string;
        }[];
    }>;
    readonly display_price: z.ZodObject<{
        value: z.ZodObject<{
            value: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            currency?: string;
        }, {
            value?: number;
            currency?: string;
        }>;
        label: z.ZodString;
        context: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string;
            url?: string;
            favicon?: string;
        }, {
            name?: string;
            url?: string;
            favicon?: string;
        }>>;
        badge: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }, {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        }>>;
    }, "strip", z.ZodTypeAny, {
        value?: {
            value?: number;
            currency?: string;
        };
        label?: string;
        badge?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        context?: string;
    }, {
        value?: {
            value?: number;
            currency?: string;
        };
        label?: string;
        badge?: {
            label?: string;
            variant?: "default" | "success" | "warning" | "error" | "info";
        };
        source?: {
            name?: string;
            url?: string;
            favicon?: string;
        };
        context?: string;
    }>;
    readonly display_image: z.ZodObject<{
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        alt?: string;
        caption?: string;
        width?: number;
        height?: number;
    }, {
        url?: string;
        alt?: string;
        caption?: string;
        width?: number;
        height?: number;
    }>;
    readonly display_gallery: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        images: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url?: string;
            alt?: string;
            caption?: string;
        }, {
            url?: string;
            alt?: string;
            caption?: string;
        }>, "many">;
        layout: z.ZodDefault<z.ZodEnum<["grid", "masonry"]>>;
        columns: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        columns?: number;
        images?: {
            url?: string;
            alt?: string;
            caption?: string;
        }[];
        layout?: "grid" | "masonry";
    }, {
        title?: string;
        columns?: number;
        images?: {
            url?: string;
            alt?: string;
            caption?: string;
        }[];
        layout?: "grid" | "masonry";
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
                value?: number;
                currency?: string;
            }, {
                value?: number;
                currency?: string;
            }>>;
            url: z.ZodOptional<z.ZodString>;
            badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                variant: z.ZodDefault<z.ZodEnum<["default", "success", "warning", "error", "info"]>>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }, {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            url?: string;
            title?: string;
            image?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
            subtitle?: string;
        }, {
            url?: string;
            title?: string;
            image?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
            subtitle?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        items?: {
            url?: string;
            title?: string;
            image?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
            subtitle?: string;
        }[];
    }, {
        title?: string;
        items?: {
            url?: string;
            title?: string;
            image?: string;
            price?: {
                value?: number;
                currency?: string;
            };
            badges?: {
                label?: string;
                variant?: "default" | "success" | "warning" | "error" | "info";
            }[];
            subtitle?: string;
        }[];
    }>;
    readonly display_sources: z.ZodObject<{
        label: z.ZodDefault<z.ZodString>;
        sources: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            url: z.ZodString;
            favicon: z.ZodOptional<z.ZodString>;
            snippet: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url?: string;
            favicon?: string;
            title?: string;
            snippet?: string;
        }, {
            url?: string;
            favicon?: string;
            title?: string;
            snippet?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        sources?: {
            url?: string;
            favicon?: string;
            title?: string;
            snippet?: string;
        }[];
    }, {
        label?: string;
        sources?: {
            url?: string;
            favicon?: string;
            title?: string;
            snippet?: string;
        }[];
    }>;
    readonly display_link: z.ZodObject<{
        url: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        favicon: z.ZodOptional<z.ZodString>;
        domain: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        favicon?: string;
        title?: string;
        image?: string;
        description?: string;
        domain?: string;
    }, {
        url?: string;
        favicon?: string;
        title?: string;
        image?: string;
        description?: string;
        domain?: string;
    }>;
    readonly display_map: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        pins: z.ZodArray<z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
            label: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            lat?: number;
            lng?: number;
            address?: string;
        }, {
            label?: string;
            lat?: number;
            lng?: number;
            address?: string;
        }>, "many">;
        zoom: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        pins?: {
            label?: string;
            lat?: number;
            lng?: number;
            address?: string;
        }[];
        zoom?: number;
    }, {
        title?: string;
        pins?: {
            label?: string;
            lat?: number;
            lng?: number;
            address?: string;
        }[];
        zoom?: number;
    }>;
    readonly display_file: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        size: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        preview: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: string;
        name?: string;
        url?: string;
        size?: number;
        preview?: string;
    }, {
        type?: string;
        name?: string;
        url?: string;
        size?: number;
        preview?: string;
    }>;
    readonly display_code: z.ZodObject<{
        language: z.ZodString;
        code: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        lineNumbers: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        title?: string;
        language?: string;
        lineNumbers?: boolean;
    }, {
        code?: string;
        title?: string;
        language?: string;
        lineNumbers?: boolean;
    }>;
    readonly display_spreadsheet: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        headers: z.ZodArray<z.ZodString, "many">;
        rows: z.ZodArray<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>, "many">, "many">;
        format: z.ZodOptional<z.ZodObject<{
            moneyColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            percentColumns: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            moneyColumns?: number[];
            percentColumns?: number[];
        }, {
            moneyColumns?: number[];
            percentColumns?: number[];
        }>>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        format?: {
            moneyColumns?: number[];
            percentColumns?: number[];
        };
        rows?: (string | number)[][];
        headers?: string[];
    }, {
        title?: string;
        format?: {
            moneyColumns?: number[];
            percentColumns?: number[];
        };
        rows?: (string | number)[][];
        headers?: string[];
    }>;
    readonly display_steps: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        steps: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            status: z.ZodDefault<z.ZodEnum<["completed", "current", "pending"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "completed" | "current" | "pending";
            title?: string;
            description?: string;
        }, {
            status?: "completed" | "current" | "pending";
            title?: string;
            description?: string;
        }>, "many">;
        orientation: z.ZodDefault<z.ZodEnum<["vertical", "horizontal"]>>;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        steps?: {
            status?: "completed" | "current" | "pending";
            title?: string;
            description?: string;
        }[];
        orientation?: "vertical" | "horizontal";
    }, {
        title?: string;
        steps?: {
            status?: "completed" | "current" | "pending";
            title?: string;
            description?: string;
        }[];
        orientation?: "vertical" | "horizontal";
    }>;
    readonly display_alert: z.ZodObject<{
        variant: z.ZodEnum<["info", "warning", "error", "success"]>;
        title: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string;
        variant?: "success" | "warning" | "error" | "info";
        icon?: string;
        title?: string;
    }, {
        message?: string;
        variant?: "success" | "warning" | "error" | "info";
        icon?: string;
        title?: string;
    }>;
    readonly display_choices: z.ZodObject<{
        question: z.ZodOptional<z.ZodString>;
        choices: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            icon?: string;
            description?: string;
            id?: string;
        }, {
            label?: string;
            icon?: string;
            description?: string;
            id?: string;
        }>, "many">;
        layout: z.ZodDefault<z.ZodEnum<["buttons", "cards", "list"]>>;
    }, "strip", z.ZodTypeAny, {
        layout?: "buttons" | "cards" | "list";
        question?: string;
        choices?: {
            label?: string;
            icon?: string;
            description?: string;
            id?: string;
        }[];
    }, {
        layout?: "buttons" | "cards" | "list";
        question?: string;
        choices?: {
            label?: string;
            icon?: string;
            description?: string;
            id?: string;
        }[];
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
