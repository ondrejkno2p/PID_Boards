// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

interface ConversionData {
    success: boolean
    query: {
        from: string
        to: string
        amount: number
    }
    info?: {
        timestamp: string
        rate: number
    }
    date: string
    result: number
}