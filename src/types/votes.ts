// Типи та інтерфейси, які стосуються лише одного компонента, оголошені безпосередньо у файлі цього компонента

export interface Votes {
    good: number;
	neutral: number;
	bad: number;
}

export type VoteType = keyof Votes;