require "test_helper"

class Example4ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get example4_index_url
    assert_response :success
  end
end
