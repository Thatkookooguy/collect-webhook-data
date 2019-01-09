describe( 'MyCtrl', function() {

    it( 'should know the truth', function() {
        expect( true ).toBe( true );
    } );

    //
    // Import modules
    //

    beforeEach( module( 'MyControllersModule', 'OtherDependentModule' ) );

    // Variables here can be set in the beforeEach() below, and can also be referenced from describe()s even further below.
    //  Use them for injecting known values, and also for checking the results of function calls
    var $scope, $controller, injectedThing;
    
    //
    // Do Injection
    //
    
    beforeEach( inject( function( _$rootScope_, _$controller_ ) {
        $scope = _$rootScope_.$new();

        injectedThing = { id: 4 };  // Variable initialized above.

        $controller = _$controller_( 'MyCtrl', {
            $scope: $scope,
            injectedThing: injectedThing
        } );

    } ) );

    //
    // Test each function on scope - organized via describe() blocks
    //

    describe( 'initialization', function() {

        it( 'initializes status on scope', function() {
            expect( $scope.targetStatus ).toBe( 'thing' );
        } );

        it( 'initializes expansion status on scope', function() {
            expect( $scope.expanded ).toBe( false );
        } );

    } );

    describe( 'setExpanded()', function() {
        it( 'should set expanded to the given value', function() {
            $scope.expanded = false;

            $scope.setExpanded( true );

            expect( $scope.expanded ).toBe( true );
        } );
    } );

    describe( 'toggleExpanded()', function() {
        it('should set expanded to the opposite boolean value', function() {
            $scope.expanded = true;

            $scope.toggleExpanded();

            expect( $scope.expanded ).toBe( false );
        })
    } );

    describe( 'selectEntity()', function() {
        it( 'should put the given entity on scope', function() {
            var entity = { id: 1 };

            $scope.selectEntity( job );

            expect( $scope.selectedEntity ).not.toBeNull();
            expect( $scope.selectedEntity.id ).toBe( entity.id );
        } );
    } );
} );
