import { useState } from "react";

let isMount = true;
let workInProgressHook = null;

const fiber = {
    statenNode: App,
    memoizedState: null
}

function schedule() {
    workInProgressHook = fiber.memoizedState;
    const app = fiber.statenNode();
    isMount = false;
    return app;
}

function useState(initialState) {
    let hook;
    if(isMount) {
        hook = {
            memoizedState: initialState,
            next: null,
            queque: {
                pending: null
            }
        }
        if(!fiber.memoizedState) {
            fiber.memoizedState = hook;
        } else {
            workInProgressHook.next = hook;
        }
        workInProgressHook = hook;
    } else {
        hook = workInProgressHook;
        workInProgressHook = workInProgressHook.next;
    }

    // todo
    let baseState = hook.memoizedState;
    if (hook.queue.pending) {
        let firstUpdate = hook.queue.pending.next;

        do {
        const action = firstUpdate.action;
        baseState = action(baseState);
        firstUpdate = firstUpdate.next;
        } while (firstUpdate !== hook.queue.pending.next)

        hook.queue.pending = null;
    }
    hook.memoizedState = baseState;

    return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction(queue, action) {
    const update = {
        action,
        next
    }

    if(queue.pending === null) {
        update.next = update;
    } else {
        // u0 -> u0
        // u1 -> u0 -> u1
        update.next = queue.pending.next;
        queue.pending.next = update;
    }

    queue.pending = update;

    schedule();
}


function App() {
    const [count, setCount] = useState(0);

    return {
        onClick() {
            setCount(count => count + 1);
        }
    }
}

var fiberRoot = {
    statenNode: App,
    memoizedState: {
        memoizedState: 0,
        next: {
              
        },
        queque: {
            wo,
            
        }
    }
}