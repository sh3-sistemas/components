/**
 *
 * Sh3NoticeCard is an extension to standard card element with additional features.
 *
 * [Primevue Based](https://www.primevue.org/card/)
 *
 * @module cards
 *
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
import { notice, alert } from "../constants";

type cardVariation = {
    cardStyle: string;
    circleStyle: string;
    iconVariation: string;
    iconColor: string;
};

export const variations = <Record<"notice" | "alert", cardVariation>>{
    notice: notice,
    alert: alert,
};

export interface Sh3NoticeCardProps {
    noticeCard: NoticeCard
}

export type NoticeCard = {
    variation: keyof typeof variations,
    title: string,
    text: string,
}

export type Sh3CardSlots = object
export type Sh3CardEmits = object
/**
 * **SH3 - Sh3NoticeCard**
 *
 * _NoticeCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3NoticeCard extends ClassComponent<Sh3NoticeCardProps, Sh3CardSlots, Sh3CardEmits> { }

export interface Sh3NoticeCardWrapperProps {
    noticeCards: Array<NoticeCard>
    style: string
}
/**
 * **SH3 - Sh3NoticeCardWrapper**
 *
 * _NoticeCardWrapper is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3NoticeCardWrapper extends ClassComponent<Sh3NoticeCardWrapperProps, Sh3CardSlots, Sh3CardEmits> { }

export type NotificationLabel = {
    time: string;
    autarchy: string;
}

export type NotificationType = {
    text: string;
    tag: string;
    label: NotificationLabel
};

export interface NotificationCardProps {
    notifications: Array<NotificationType>
}
/**
 * **SH3 - Sh3NotificationCard**
 *
 * _NotificationCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3NotificationCard extends ClassComponent<NotificationCardProps, Sh3CardSlots, Sh3CardEmits> { }

export type ImageLabel = {
    label: string;
    image: string;
}

export type PictureCard = {
    params?: object;
    onClick: (params: object) => void;
} & ImageLabel;

export type PictureCardStyle = {
    card: string;
} & ImageLabel;

export interface Sh3PictureCardProps {
    pictureCard: PictureCard
    pictureCardStyle: PictureCardStyle
}
/**
 * **SH3 - Sh3PictureCard**
 *
 * _PictureCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3PictureCard extends ClassComponent<Sh3PictureCardProps, Sh3CardSlots, Sh3CardEmits> { }

export interface Sh3SimpleCardProps {
    cardStyle: string
}
/**
 * **SH3 - Sh3SimpleCard**
 *
 * _SimpleCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3SimpleCard extends ClassComponent<Sh3SimpleCardProps, Sh3CardSlots, Sh3CardEmits> { }

export interface Sh3LobbySectionCardProps {
    title: string
    titleStyle: string
}
/**
 * **SH3 - Sh3LobbySectionCard**
 *
 * _LobbySectionCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3LobbySectionCard extends ClassComponent<Sh3LobbySectionCardProps, Sh3CardSlots, Sh3CardEmits> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3NoticeCard: GlobalComponentConstructor<Sh3NoticeCard>;
        Sh3NoticeCardWrapper: GlobalComponentConstructor<Sh3NoticeCardWrapper>;
        Sh3NotificationCard: GlobalComponentConstructor<Sh3NotificationCard>;
        Sh3PictureCard: GlobalComponentConstructor<Sh3PictureCard>;
        Sh3SimpleCard: GlobalComponentConstructor<Sh3SimpleCard>;
        Sh3LobbySectionCard: GlobalComponentConstructor<Sh3LobbySectionCard>;
    }
}

export default { Sh3NoticeCard, Sh3NoticeCardWrapper, Sh3NotificationCard, Sh3PictureCard, Sh3SimpleCard, Sh3LobbySectionCard };
