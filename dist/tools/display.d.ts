export declare function createDisplayTools(): {
    display_highlight: import("ai").Tool<{
        value: string | number;
        label: string;
        action: "metric";
        unit?: string | undefined;
        trend?: {
            value: string;
            direction: "up" | "down" | "neutral";
        } | undefined;
        icon?: string | undefined;
    } | {
        value: {
            value: number;
            currency: string;
        };
        label: string;
        action: "price";
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
    } | {
        message: string;
        variant: "success" | "warning" | "error" | "info";
        action: "alert";
        title?: string | undefined;
        icon?: string | undefined;
    } | {
        layout: "buttons" | "cards" | "list";
        choices: {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }[];
        action: "choices";
        question?: string | undefined;
    }, {
        _display: boolean;
        value: string | number;
        label: string;
        action: "metric";
        unit?: string | undefined;
        trend?: {
            value: string;
            direction: "up" | "down" | "neutral";
        } | undefined;
        icon?: string | undefined;
    } | {
        _display: boolean;
        value: {
            value: number;
            currency: string;
        };
        label: string;
        action: "price";
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
    } | {
        _display: boolean;
        message: string;
        variant: "success" | "warning" | "error" | "info";
        action: "alert";
        title?: string | undefined;
        icon?: string | undefined;
    } | {
        _display: boolean;
        layout: "buttons" | "cards" | "list";
        choices: {
            id: string;
            label: string;
            description?: string | undefined;
            icon?: string | undefined;
        }[];
        action: "choices";
        question?: string | undefined;
    }>;
    display_collection: import("ai").Tool<{
        columns: {
            type: "number" | "link" | "text" | "money" | "image" | "badge";
            label: string;
            key: string;
            align: "left" | "center" | "right";
        }[];
        rows: Record<string, unknown>[];
        sortable: boolean;
        action: "table";
        title?: string | undefined;
    } | {
        headers: string[];
        rows: (string | number | null)[][];
        action: "spreadsheet";
        title?: string | undefined;
        format?: {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        } | undefined;
    } | {
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
        action: "comparison";
        title?: string | undefined;
        attributes?: {
            label: string;
            key: string;
        }[] | undefined;
    } | {
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
        action: "carousel";
        title?: string | undefined;
    } | {
        columns: number;
        images: {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }[];
        layout: "grid" | "masonry";
        action: "gallery";
        title?: string | undefined;
    } | {
        label: string;
        sources: {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }[];
        action: "sources";
    }, {
        _display: boolean;
        columns: {
            type: "number" | "link" | "text" | "money" | "image" | "badge";
            label: string;
            key: string;
            align: "left" | "center" | "right";
        }[];
        rows: Record<string, unknown>[];
        sortable: boolean;
        action: "table";
        title?: string | undefined;
    } | {
        _display: boolean;
        headers: string[];
        rows: (string | number | null)[][];
        action: "spreadsheet";
        title?: string | undefined;
        format?: {
            moneyColumns?: number[] | undefined;
            percentColumns?: number[] | undefined;
        } | undefined;
    } | {
        _display: boolean;
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
        action: "comparison";
        title?: string | undefined;
        attributes?: {
            label: string;
            key: string;
        }[] | undefined;
    } | {
        _display: boolean;
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
        action: "carousel";
        title?: string | undefined;
    } | {
        _display: boolean;
        columns: number;
        images: {
            url: string;
            alt?: string | undefined;
            caption?: string | undefined;
        }[];
        layout: "grid" | "masonry";
        action: "gallery";
        title?: string | undefined;
    } | {
        _display: boolean;
        label: string;
        sources: {
            title: string;
            url: string;
            favicon?: string | undefined;
            snippet?: string | undefined;
        }[];
        action: "sources";
    }>;
    display_card: import("ai").Tool<{
        title: string;
        action: "product";
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
    } | {
        title: string;
        url: string;
        action: "link";
        description?: string | undefined;
        favicon?: string | undefined;
        image?: string | undefined;
        domain?: string | undefined;
    } | {
        type: string;
        name: string;
        action: "file";
        url?: string | undefined;
        size?: number | undefined;
        preview?: string | undefined;
    } | {
        url: string;
        action: "image";
        alt?: string | undefined;
        caption?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }, {
        _display: boolean;
        title: string;
        action: "product";
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
    } | {
        _display: boolean;
        title: string;
        url: string;
        action: "link";
        description?: string | undefined;
        favicon?: string | undefined;
        image?: string | undefined;
        domain?: string | undefined;
    } | {
        _display: boolean;
        type: string;
        name: string;
        action: "file";
        url?: string | undefined;
        size?: number | undefined;
        preview?: string | undefined;
    } | {
        _display: boolean;
        url: string;
        action: "image";
        alt?: string | undefined;
        caption?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }>;
    display_visual: import("ai").Tool<{
        type: "bar" | "line" | "pie" | "area" | "donut";
        title: string;
        data: {
            value: number;
            label: string;
            color?: string | undefined;
        }[];
        action: "chart";
        format?: {
            locale: string;
            prefix?: string | undefined;
            suffix?: string | undefined;
        } | undefined;
    } | {
        pins: {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }[];
        zoom: number;
        action: "map";
        title?: string | undefined;
    } | {
        code: string;
        language: string;
        lineNumbers: boolean;
        action: "code";
        title?: string | undefined;
    } | {
        steps: {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }[];
        action: "progress";
        title?: string | undefined;
    } | {
        steps: {
            status: "pending" | "completed" | "current";
            title: string;
            description?: string | undefined;
        }[];
        orientation: "vertical" | "horizontal";
        action: "steps";
        title?: string | undefined;
    }, {
        _display: boolean;
        type: "bar" | "line" | "pie" | "area" | "donut";
        title: string;
        data: {
            value: number;
            label: string;
            color?: string | undefined;
        }[];
        action: "chart";
        format?: {
            locale: string;
            prefix?: string | undefined;
            suffix?: string | undefined;
        } | undefined;
    } | {
        _display: boolean;
        pins: {
            lat: number;
            lng: number;
            label?: string | undefined;
            address?: string | undefined;
        }[];
        zoom: number;
        action: "map";
        title?: string | undefined;
    } | {
        _display: boolean;
        code: string;
        language: string;
        lineNumbers: boolean;
        action: "code";
        title?: string | undefined;
    } | {
        _display: boolean;
        steps: {
            status: "pending" | "completed" | "current";
            label: string;
            description?: string | undefined;
        }[];
        action: "progress";
        title?: string | undefined;
    } | {
        _display: boolean;
        steps: {
            status: "pending" | "completed" | "current";
            title: string;
            description?: string | undefined;
        }[];
        orientation: "vertical" | "horizontal";
        action: "steps";
        title?: string | undefined;
    }>;
};
